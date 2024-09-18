import React from 'react'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAuth } from '../apis/auth.api.js';
import { login as Authlogin } from '../store/slice.js';
import Input from './Input';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
const Login = () => {
    const {register,handleSubmit , formState:{errors}} =useForm();
    const {login ,currentUser}=useAuth();
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const loginhandler = async (user)=>{
      console.log(user)
        try {
            const session = await login (user);
            console.log(session)
            if (session?.success ===true){
                toast.success(session?.message);
                console.log(session)
                currentUser()
                .then((userdata)=>{
                  console.log(userdata)
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
    
  return (
    <div className='flex items-center justify-center item-center mx-auto w-full '>
        <div className='mx-auto w-full max-w-lg backdrop-blur-[2px] rounded-xl p-10 text-white '>
        <div className='mb-2 flex justify-center'>
            

        </div>
        <h2 className='text-center text-xs sm:text-2xl font-bold leading-tight '>
            sign in to your account 

        </h2>
        <p className='mt-2 text-xs sm:text-base text-center  '>
        Don&apos;t have any account?&nbsp;<Link to={"/signup"}>signup</Link>

        </p>
        <form onSubmit={handleSubmit(loginhandler)} className='mt-8   '>
            <div className='space-y-5'>
                <Input
              className="px-4 py-2  w-full"

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
         className="px-4 py-2  w-full"

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
    }
    
export default Login
    
