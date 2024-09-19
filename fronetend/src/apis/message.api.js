import axios from "axios"

export const useMessage=()=>{
 
    const sendMessage=async(message,reciverid)=>{
        console.log(reciverid)
       try {
         const response=await axios.post(`/api/v1/message/sendmessage`,{message,reciverid})
         return response.data
       } catch (error) {
         console.log(error.response.data)
         return error.response.data
       }
    } 

    const deletemessage=async(messageid)=>{
        try {
            const response=await axios.post(`/api/v1/message/deletemessage/:${messageid}`)
            return response.data
        } catch (error) {
            console.log(error.response.data)
            return error.response.data
            
        }
    }

    const getmessage=async()=>{
        try {
            const response=await axios.get("/api/v1/users/getmessages")
            return response.data
        } catch (error) {
            console.log(error.response.data)
            return error.response.data
            
        }
    }
    return{
        sendMessage,deletemessage,getmessage
    }
} 