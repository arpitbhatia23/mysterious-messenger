import React from 'react'
import {useform} from 'react-hook-form'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAuth } from '../apis/auth.api.js';
import Input from './Input';

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
    <div className='flex items-center justify-center w-full py-8'>
        <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                {/* <img src={logo} alt="logo" className='w-full h-full object-cover'/> */}
            </span>

        </div>
        <h2 className='text-center text-2xl font-bold leading-tight '>
            sign in to your account

        </h2>
        <p className='mt-2 text-center text-base text-black/60'>
        Don&apos;t have any account?&nbsp;

        </p>
        <form onSubmit={handlesubmit(loginhandler)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                 label='Email: '
                 placeholder='Enter your email'
                 type='email'
                 {...register('email', {
                   required: true ,
                   validate: {
                     matchPattern: (value) =>
                       /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                       'Email address must be a valid address',
                   },
                 })}
                />
                {errors.email && <p className='text-red-500'>email is required</p>}
            
            <Input
              label='Password: '
              type='password'
              placeholder='Enter your password'
              {...register('password', {
                required: true,
              })}
            />
             {errors.password && <p className='text-red-500'> password is required </p>}
            <Button type='submit' className='w-full'>
              Sign in
            </Button>
            </div>
        </form>


        </div>
      
    </div>
  )


export default Login
