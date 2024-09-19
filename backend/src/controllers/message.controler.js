import { asynchandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { apiError } from "../utils/ApiError.js";
import { apiResponse } from "../utils/Apiresponse.js";
import { Message } from "../models/massage.model.js";
import mongoose, { isValidObjectId } from "mongoose";

const message = asynchandler(async (req, res) => {
    // const { reciverid } = req.params;

    const { message ,reciverid} = req.body;
 console.log(reciverid)
    if ((!message && !reciverid)) {
        throw new apiError(400, "Message and reciverid required");
    }

    // Convert reciverid to ObjectId
    let reciverObjectId;
    try {
        reciverObjectId = new mongoose.Types.ObjectId(reciverid);
    } catch (error) {
        throw new apiError(400, "Invalid reciverid");
    }

    // Find user by ObjectId
    const user = await User.findById(reciverObjectId);
    if (!user) {
        throw new apiError(404, "User not found");
    }

    // Create new message
    const newMessage = new Message({
        reciverID: reciverObjectId,
        message
    });
    await newMessage.save();

    return res.status(200)
        .json(new apiResponse(200, {newMessage},"Message sent successfully"));
});

const deletemessage = asynchandler(async (req, res) => {
    const { messageid } = req.body;

if(!isValidObjectId(messageid)){
  throw new apiError(400,"userid required")
}

   await Message.findByIdAndDelete(messageid)
    
   

    

    return res.status(200)
        .json(new apiResponse(200, {},"Message deleted successfully"));
});

const deleteAllMessage=asynchandler(async(req,res)=>{

    const userid=req.user?.id

     await Message.findByIdAndDelete({reciverId:userid})

    return res.status(200)
        .json(new apiResponse(200, {},"Message deleted successfully"));


})
export {
    message,
    deletemessage,
    deleteAllMessage
};
