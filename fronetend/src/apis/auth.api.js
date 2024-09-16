import axios from "axios"

export const useAuth=()=>{
    const login=async(user)=>{
       try {
         const response= await axios.post(`/api/v1/users/login`,user)
         return response.data
       } catch (error) {
        console.log(response.data)
        return error.response.data
       }
    }

    return {
        login
    }
}
 
