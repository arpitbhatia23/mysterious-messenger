import axios from "axios"

export const useAuth=()=>{
  //login
    const login=async(user)=>{
       try {
         const response= await axios.post(`/api/v1/users/login`,user)
         return response.data
       } catch (error) {
        console.log(error.response.data)
        return error.response.data
       }
    }
    //        register
    const register=async(user)=>{
      try {
        const response= await axios.post(`/api/v1/users/register`,user)
        return response.data
      } catch (error) {
       console.log(error.response.data)
       return error.response.data
      }
   }

  //  logout
  const logout =async()=>{
    
    try {
      const response =await axios.post(`/api/v1/users/logout`)
  return response.data
      
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
  }
// =========refresh token
const refreshToken = async ()=>{
  try {
    const response= await axios.post(`/api/v1/users/refreshToken`)
    return response.data
  } catch (error) {
    console.log(error.response.data);
    return error.response.data
    
  }
}
// =============Change password

const changePassword = async (pass)=>{
try {
  const response = await axios.post(`/api/v1/users/change-password`,pass)
  return response.data
} catch (error) {
  console.log(error);
  return error .response.data
  
}
}
// ===============current user
const currentUser = async (user)=>{
try {
  const response = await axios.get(`/api/v1/users/current-user`,user)
  return response.data
} catch (error) {
  console.log(error);
  return error.response.data
  
}
}
// =================update account
const updateAccount =async(user)=>{
  try {
    const response = await axios.patch(`/api/v1/users/update-account`,user)
    return response.data
  } catch (error) {
    console.log(error);
    return error.response.data
    
  }
}
// =======================generate link
 
const generateLink =async(link)=>{
  try {
    const response = await axios.get(`/api/v1/users/generatelink`,link)
    return response.data

  } catch (error) {
    console.log(error.response.data);
    return error.response.data
    
  }
}
    return {
        login,
        register,
        logout,
        refreshToken,
        changePassword,
        currentUser,
        updateAccount,
        generateLink
    }
}
 
