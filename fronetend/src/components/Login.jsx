import React from 'react'
import {useform} from 'react-hook-form'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAuth } from 'src/apis/auth.api';

const Login = () => {
    const {register,handlesubmit , formState:{error}} =useform();
    const {login ,currentuser}=useAuth();
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const loginhandler = async (user)=>{
        try {
            const session = await login (user);
            if (session?.success ===true){
                toast.success(session?.message);

                currentuser()
                .then((userdata)=>{
                    dispatch(Authlogin(userdata))
                    navigate('/')
                })
            }
              if(session?.success===false){
                toast.error(session?.message)
              }
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message || 'An error occured';
            toast.error(errorMsg);
        }
    }
    }
  return (
    <div>
      
    </div>
  )


export default Login
