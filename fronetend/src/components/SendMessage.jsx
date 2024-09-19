import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useMessage } from '../apis/message.api.js';
import Input from './Input.jsx';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';

const SendMessage = () => {
const receiverid = useParams()
const [message,setmessage]=useState()

console.log(receiverid);
const SendMessage = function(message)
{
  const {sendMessage}=useMessage()

  sendMessage(message,receiverid)
  .then((data)=>{console.log(data);
  })
}





  return (
    <div className='  '>
     <div className='flex justify-center'>                        
      <h2 className='text-white py-4 text-3xl'>Public Profile Link </h2>
     </div>

     <div className='justify-center m-16 '>
     <p className='text-white' >Send Anonymous Message to </p>

     <Input
      onChange={(e)=>setmessage(e.target.value)}
      value={message}
      className=' h-16 text-xl py-1 px-1 '
      placeholder='Enter your message'
      />
      <div className='flex justify-center'>
      <Button
       onClick={()=>SendMessage(message)}
       className='px-12 m-4'
      >
        Send Message
        </Button>
      </div>
      <hr />

       <div className=' justify-center text-center m-4'>
       <p className='text-white text-center text-gray-300'>Get your message box</p> 

       <Button><Link to={'/signup'}>Create your account</Link>
       </Button></div> 
       
      {/* <button onClick={()=>SendMessage(message)}>Send</button> */}
     </div>
    </div>
  )
}



export default SendMessage
