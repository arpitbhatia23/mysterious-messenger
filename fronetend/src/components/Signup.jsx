import React from 'react';
import Button from './Button';
import {useAuth} from '../apis/auth.api.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Input from './Input';

function Signup() {
  const {  signup  } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const signupHandler = async (data) => {
   
      await signup(data)
      .then((res) => {console.log(res)
      if(res.success===true){
        toast.success(res.message);
        navigate('/login');

      }
      else{
        toast.error(res.message)
      }
    })
    
  };

  return (
    <div className="flex items-center justify-center w-full py-5 ">
      <div className='mx-auto w-full max-w-lg  rounded-xl p-5 '>
        <h2 className='text-center text-2xl font-bold leading-tight text-white'>Sign up to your account</h2>
        <p className='mt-2 text-center text-xs sm:text-base text-white'>Already have an account? <Link to={"/login"}>login</Link></p>
        <form className='mt-1' onSubmit={handleSubmit(signupHandler)}>
          <div className='space-y-5'>
            <div>
              <Input
              label="username"
                {...register('username', { required: 'Username is required' })}
                type="text"
                placeholder="Enter your username"
                className="px-4 py-2  w-full"
              />
              {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            </div>
            <div>
            <Input
              label="fullName"
                {...register('fullName', { required: 'fullName is required' })}
                type="text"
                placeholder="Enter your username"
                className="px-4 py-2  w-full"
              />
              {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

            </div>
            <div>
              
              <Input
                label="Email"
                {...register('email', { required: 'Email is required',
                    validate: {
                        matchPattern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                          'Email address must be a valid address',
                      },

                 }
                    
                )}
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2  w-full"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <Input
              label="password"
                {...register('password', { required: 'Password is required' })}
                type="password"
                placeholder="Enter your password"
                className="px-4 py-2  w-full"
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
           </div>
            <Button type="submit" className='w-full bg-blue-500 rounded-xl py-2 text-white'>
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
