import axios from "axios"

export const useAuth=()=>{
  //login
    const login=async(user)=>{
       try {
         const response= await axios.post(`/api/v1/users/login`,user,{ withCredentials:true})
         return response.data
       } catch (error) {
        return error.response.data
       }
    }
    //        register
    const signup=async(user)=>{
      try {
        const response= await axios.post(`/api/v1/users/register`,user,{ withCredentials: true})
        return response.data
      } catch (error) {
       return error.response.data
      }
   }

  //  logout
  const logout =async()=>{
    
    try {
      const response =await axios.post(`/api/v1/users/logout`,{ withCredentials: true})
  return response.data
      
    } catch (error) {
      return error.response.data
    }
  }
// =========refresh token
const refreshToken = async ()=>{
  try {
    const response= await axios.post(`/api/v1/users/refreshToken`,{ withCredentials: true})
    return response.data
  } catch (error) {
    return error.response.data
    
  }
}
// =============Change password

const changePassword = async (pass)=>{
try {
  const response = await axios.post(`/api/v1/users/change-password`,pass)
  return response.data
} catch (error) {
  return error.response.data
  
}
}
// ===============current user
const currentUser = async ()=>{
try {
  const response = await axios.get(`/api/v1/users/current-user`, {withCredentials:true})
  return response.data
} catch (error) {
  console.log(error);
  return error.response.data
  
}
}
// =================update account
const updateAccount =async(user)=>{
  try {
    const response = await axios.patch(`/api/v1/users/update-account`,user,{ withCredentials: true})
    return response.data
  } catch (error) {
    return error.response.data
    
  }
}
// =======================generate link
 
const generateLink =async(link)=>{
  try {
    const response = await axios.get(`/api/v1/users/generatelink`,link,{ withCredentials: true})
    return response.data

  } catch (error) {
    return error.response.data
    
  }
}
    return {
        login,
        signup,
        logout,
        refreshToken,
        changePassword,
        currentUser,
        updateAccount,
        generateLink
    }
}
 
