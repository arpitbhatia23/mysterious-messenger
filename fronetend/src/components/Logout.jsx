import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useAuth } from '../apis/auth.api'
import {logout as authlogout} from "../store/slice.js"
const Logout = () => {
    const {logout}=useAuth()
    const navigate=useNavigate()
    const disaptch=useDispatch()
    const logouthandler=()=>{
        logout()
        .then((userdata)=>{
   console.log(userdata)
   if(userdata.sucess===true){
    disaptch(authlogout())
    navigate("/signin")
   }
        })
    }
  return (
    <div>
           <div  className={`${className} flex`} onClick={logouthandler}>logout</div>

    </div>
  )
}

export default Logout
