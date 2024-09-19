import axios from "axios"

export const useAuth=()=>{
  //login
    const login=async(user)=>{
       try {
         const response= await axios.post(`/api/v1/users/login`,user,{headers: {
          'Content-Type': 'application/json',
        }, withCredentials:true})
         return response.data
       } catch (error) {
        return error.response.data
       }
    }
    //        register
    const signup=async(user)=>{
      try {
        const response= await axios.post(`/api/v1/users/register`,user,{headers: {
          'Content-Type': 'application/json',
        }, withCredentials: true})
        return response.data
      } catch (error) {
       return error.response.data
      }
   }

  //  logout
  const logout =async()=>{
    
    try {
      const response =await axios.post(`/api/v1/users/logout`,{headers: {
        'Content-Type': 'application/json',
      }, withCredentials: true})
  return response.data
      
    } catch (error) {
      return error.response.data
    }
  }
// =========refresh token
const refreshToken = async ()=>{
  try {
    const response= await axios.post(`/api/v1/users/refreshToken`,{headers: {
      'Content-Type': 'application/json',
    }, withCredentials: true})
    return response.data
  } catch (error) {
    return error.response.data
    
  }
}
// =============Change password

const changePassword = async (pass)=>{
try {
  const response = await axios.post(`/api/v1/users/change-password`,pass,{
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.data
} catch (error) {
  return error.response.data
  
}
}
// ===============current user
const currentUser = async ()=>{
try {
  const response = await axios.get(`/api/v1/users/current-user`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials:true})
  return response.data
} catch (error) {
  console.log(error);
  return error.response.data
  
}
}
// =================update account
const updateAccount =async(user)=>{
  try {
    const response = await axios.patch(`/api/v1/users/update-account`,user,{ 
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true})
    return response.data
  } catch (error) {
    return error.response.data
    
  }
}
// =======================generate link
 
const generateLink =async(link)=>{
  try {
    const response = await axios.get(`/api/v1/users/generatelink`,link,{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true})
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
 
