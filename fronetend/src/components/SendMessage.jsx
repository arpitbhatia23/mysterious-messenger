import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useMessage } from '../apis/message.api.js';
import Input from './Input.jsx';


const SendMessage = () => {
const {receiverid} = useParams()
console.log(receiverid)
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
    <div className='text-5xl'>
      
      <Input
      onChange={(e)=>setmessage(e.target.value)}
      value={message}
      className='w-96'
      />
      <button onClick={()=>SendMessage(message)}>Send</button>
    </div>
  )
}

export default SendMessage
