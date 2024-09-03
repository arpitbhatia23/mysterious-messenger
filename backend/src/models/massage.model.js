import mongoose from "mongoose";

const meassageSchema= new mongoose.Schema({
    reciverID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type:String,
        required:true

    }
    
},
{
    timestamps:true

})
export const Message= mongoose.model("Message",meassageSchema)