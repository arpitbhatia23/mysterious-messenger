import { apiError } from "../utils/ApiError.js";
import { asynchandler } from "../utils/asyncHandler.js";
import {User} from '../models/user.model.js'
import {apiResponse} from"../utils/Apiresponse.js"
import { Message } from "../models/massage.model.js";

const generateAccessTokenAndRefreshToken=async(userID)=>{
    try {
      const user=  await User.findById(userID)
     const accessToken=  user.generateAccessToken()
      const refreshToken=  user.generateRefreshToken()
      user.refreshToken=refreshToken
      

     await user.save({validateBeforeSave:false})

     return {accessToken,refreshToken}

    } catch (error) {
       throw new apiError(500,'something went wrong while generating refresh and access token') 
    }
}

const register=asynchandler(async(req,res)=>{

    const {fullName,username,email,password,}=req.body 

    if([fullName,username,email,password].some((field)=>field?.trim()==="")){
        throw  new apiError(400,"all field required")
    }
    const existeduser=await User.findOne({$or:[{username},{email}]})
    if (existeduser){
        throw new  apiError(400,"user aleready exist")
    }

    const user=await User.create({
        fullName,
        username:username.toLowerCase(),
        email,
        password
    })

    const createduser= await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createduser){
        throw new apiError(500,"something went wrong")
    }

    return res.status(201)
    .json(new apiResponse(201,{createduser},"user reggistered successfull "))
})


const loginUser=asynchandler(async(req,res)=>{
    const {email,username,password}=req.body
if(!username && !email){
    throw new apiError(400,"username or email is requried")
}
const user=await User.findOne({$or: [{email},{username}] })
if(!user){
    throw new apiError(400,"user not exit")
}

const isPasswordVaild=await user.isPasswordCorrect(password)
 if(!isPasswordVaild){
    throw new apiError(401,'Invalid user credentials')
 }
 const {accessToken,refreshToken}=await generateAccessTokenAndRefreshToken(user._id)

 const loggedInUser= await User.findById(user._id).select('-password -refreshToken')
 const options={
    httpOnly:true,
    secure:true
 }
 return res
 .status(200)
 .cookie('accessToken',accessToken,options)
 .cookie('refreshToken',refreshToken,options)
 .json(
    new apiResponse(200,{
        user: loggedInUser,accessToken,refreshToken,
        
    },'user logged in sucessfully')
 )
})
const logoutUser=asynchandler(async(req,res)=>{
    await User.findByIdAndUpdate(
         req.user._id,
         {
             $unset:{
                 refreshToken:1,
                 
             }
         },
         {
             new:true
         }
     )
     const options={
         httpOnly:true,
         secure:true
      }
      return res.status(200)
      .clearCookie("accessToken",options)
      .clearCookie('refreshToken',options)
      .json(new apiResponse(200,{},'user logged out'))
 })
 const refreshAccessToken=asynchandler(async(req,res)=>{
    const incomingRefreshToken= req.cookies.refreshToken || req.body.refreshToken
    if(!incomingRefreshToken){
     throw new apiError(401,"unauthorized request")
    }
 
    try {
     const decodedToken=jwt.verify(incomingRefreshToken ,
      process.env.REFRESH_TOKEN_SECRET
     )
    const user= User.findById(decodedToken?._id)
    if(!user){
      throw new apiError(401,"invalid refresh token")
    }
    if(incomingRefreshToken!==user?.refreshToken){
   throw new apiError(401,'refresh token is expired or used')
   
    }
    const options={
      httpOnly:true,
      secure:true
  
    }
   const{accessToken,refreshToken}= await generateAccessTokenAndRefreshToken(user._id)
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie('refreshToken',refreshToken,options)
    .json(
      new apiResponse(200,{
           newRefreshToken:refreshToken,
          accessToken
      },
     "access token refresh")
    )
    } catch (error) {
     throw new apiError(401,error.message || "inavalid " )
     
    }
 })
 
 //change password 
 const changeCurrentPassword=asynchandler(async(req,res)=>{
     const {oldPassword,newPassword}=req.body
     const user = await User.findById(req.user?._id)
 const isPasswordCorrect=await user.isPasswordCorrect(oldPassword)
 if(!isPasswordCorrect){
     throw new apiError(401,"Invalid Old password")
 }
 user.password=newPassword
 user.save({validateBeforeSave:false})
 return res.status(200)
 .json(new apiResponse(200,{},"password change successfully")) 
 
 
 })
 

const getCurrentUser=asynchandler(async(req,res)=>{
    return res 
    .status(200)
    .json(new apiResponse(200,req.user,"current user fetched succesfully"))
})
const UpdateAccountDetails=asynchandler(async(req,res)=>{
    const {fullName,email}=req.body 
    if(!(fullName || email)){
        throw new apiError(400,"all field  required")
    }
  const user= await  User.findByIdAndUpdate(
        req.user?._id,{
            $set:{
                fullName,
                email
            }
        },
        {
            new:true
        }
    ).select("-password ")
    return res.status(200)
    .json(new apiResponse(200,user,"account details updated succesfully"))


})

const getmessage=asynchandler(async(req,res)=>{
    const userid=req.user?._id 

   console.log(userid)

    const message=await Message.find({reciverID:userid})

    if(!message||message.lenght===0){
        throw new apiError(400,"message not found")
    }
    return res.status(200)
    .json(new apiResponse(200,message,"message fetch sucessfully"))
     
})


const profilelink=asynchandler(async(req,res)=>{
    const userid=req.user?._id
    // console.log(req.user?._id)

    // console.log(userid)
    const user=await User.findByIdAndUpdate(userid,{
        $set:{
            profilelink:`${process.env.HOST}${userid}`
        }
    },{new:true})

 
    console.log(user)

    if( !user ){
        throw new apiError(400,"profile not found")
    }
  

    return res.status(200)
    .json(new apiResponse(200,user.profilelink,"userlink fetch succesfully"))

})
export {
    register,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    getmessage,UpdateAccountDetails,
    profilelink
}