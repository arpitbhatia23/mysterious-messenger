import axios from "axios"

export const useMessage=()=>{
 
    const sendMessage=async(message,reciverid)=>{
        console.log(reciverid)
       try {
         const response=await axios.post(`/api/v1/message/sendmessage`,{message,reciverid},{
            headers: {
                'Content-Type': 'application/json',
              },
         })
         return response.data
       } catch (error) {
         console.log(error.response.data)
         return error.response.data
       }
    } 

    const deletemessage=async(messageid)=>{
        console.log(messageid)
        try {
            console.log(messageid)
            const response=await axios.delete(`/api/v1/message/deletemesage`,{
                data:{messageid}},{
                    headers: {
                        'Content-Type': 'application/json',
                      },
                })
            return response.data
        } catch (error) {
            console.log(error.response.data)
            return error.response.data
            
        }
    }

    const deleteallmessage=async()=>{
        try {
            const response=await axios.delete(`/api/v1/message/deleteallmessage`,{
                headers: {
                'Content-Type': 'application/json',
              },})
            return response.data
        } catch (error) {
            console.log(error.response.data)
            return error.response.data
            
        }
    }

    const getmessage=async()=>{
        try {
            const response=await axios.get("/api/v1/users/getmessages",{
                headers: {
                    'Content-Type': 'application/json',
                  },
            })
            return response.data
        } catch (error) {
            console.log(error.response.data)
            return error.response.data
            
        }
    }
    return{
        sendMessage,deletemessage,getmessage,deleteallmessage
    }
} 