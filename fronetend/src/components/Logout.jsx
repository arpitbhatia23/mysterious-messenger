import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useAuth } from '../apis/auth.api'
import {logout as authlogout} from "../store/slice.js"
import toast from 'react-hot-toast'
const Logout = ({className}) => {
    const {logout}=useAuth()
    const navigate=useNavigate()
    const disaptch=useDispatch()
    const logouthandler=()=>{
        logout()
        .then((userdata)=>{
   console.log(userdata)
   if(userdata.success ===true){
    disaptch(authlogout())
    toast.success(userdata.message)
    navigate("/login")
    
   }
        })
    }
  return (
    <div>
           <div  className={`${className} flex   cursor-pointer`} onClick={logouthandler}>LOGOUT</div>

    </div>
  )
}

export default Logout
