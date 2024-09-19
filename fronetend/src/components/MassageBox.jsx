import React, { useCallback, useEffect, useState } from 'react';
import { useMessage } from '../apis/message.api.js';
import { HoverEffect } from './ui/card-hover-effect.jsx';
import { Copy, LucideRefreshCcw } from 'lucide-react';
import toast from 'react-hot-toast';

const MassageBox = () => {
  const { getmessage } = useMessage();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the async function within useEffect
    const fetchMessages = async () => {
      try {
        const userdata = await getmessage();
        console.log(userdata);
        setData(userdata.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the async function
    fetchMessages();
  }, []); // Add getmessage as a dependency if it's a function or variable
 const refresh= async()=>{
  try {
    const userdata = await getmessage();
    console.log(userdata);
    setData(userdata?.data);
  } catch (error) {
    console.error(error);
  }
};
 const copymessage=useCallback((message)=>{
toast.success("copy message sucessfully")
window.navigator.clipboard.writeText(message)
 },[data])
console.log(data)
  return (<div className='border border-white/15 w-4/5'>
   <span className='py-2 mx-4 text-white flex gap-x-2 ' onClick={refresh}><LucideRefreshCcw className='mx-4' /> refresh meassage box</span>

 
    <div className='text-white  mx-auto p-4  rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6' >
      {/* Uncomment and use HoverEffect if needed */}
      {/* <HoverEffect items={data} className={"bg-white/0 w-full"} /> */}
      {data&&data.length > 0 ? (
        data.sort((a,b)=>new Date(b.createdAt)- new Date(a.createdAt)).map((item) => (
          <div key={item._id} className=' border-white/15 px-6 rounded-xl '>
          <div className="chat chat-start ">
          <div className="chat-bubble chat-bubble-primary w-52  py-2 "><div className='flex items-center justify-between'>{item?.message} <Copy size={15} onClick={()=>copymessage(item.message)}/></div>
          <div className='text-xs'>{new Date(item?.createdAt).toLocaleString('en-us',{
            hour:'2-digit',
            minute:'2-digit',
            hour12:true,
            month:"short",
            day:"numeric",
            year:"numeric"
          })}</div>
          </div>
          
        </div>
        </div>
        ))
      ) :(
        <p>No messages available</p>
      )}
    </div>
    </div>
  );
};

export default MassageBox;
