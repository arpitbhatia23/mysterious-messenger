import React, { useEffect, useState } from 'react';
import { useMessage } from '../apis/message.api.js';
import { HoverEffect } from './ui/card-hover-effect.jsx';

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

  console.log(data);

  return (
    <div className='text-white  mx-auto p-4 border border-white/15 rounded-xl' >
      {/* Uncomment and use HoverEffect if needed */}
      {/* <HoverEffect items={data} className={"bg-white/0 w-full"} /> */}

      {data.length > 0 ? (
        data.map((item, index) => (
          <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary w-52">{item.message}</div>
        </div>
        ))
      ) : (
        <p>No messages available</p>
      )}
    </div>
  );
};

export default MassageBox;
