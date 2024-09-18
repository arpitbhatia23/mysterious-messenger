import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
username:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    lowecase:true,
    unique:true,
    lowercase:true,
    trim:true,
},
fullName:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
},
password:{
    type:String,
    required:[true,"password is required"]
},

profilelink:{
    type:String,
    unique:true,
    default: function() {
        return `${process.env.HOST}${this._id}`;
      }

}
},
{
timestamps:true
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()
        this.password=await bcrypt.hash(this.password,10)
    next()

})
userSchema.methods.isPasswordCorrect=async function name(password) {
    return await bcrypt.compare(password,this.password)
    
}
userSchema.methods.generateAccessToken=function () {
     return jwt.sign({
        _id:this._id,
        emall:this.email,
        fullName:this.fullName,
        username:this.username
     },
     process.env.ACCESS_TOKEN_SECRET,
     {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    
    )
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,
        
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}
userSchema.pre('save', function(next) {
    
        this.profilelink = `${process.env.HOST}${this._id}`;
    
    next();
});

export const User=mongoose.model("user",userSchema)
