import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useMessage } from '../apis/message.api.js';
import { Copy, DeleteIcon, LucideRefreshCcw } from 'lucide-react'; // Removed Instagram icon
import toast from 'react-hot-toast';
import html2canvas from 'html2canvas';

const MassageBox = () => {
  const { getmessage, deletemessage, deleteallmessage } = useMessage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const messageBoxRef = useRef(null); // Reference for the message box

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const userdata = await getmessage();
        console.log(userdata);
        setData(userdata.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  const refresh = async () => {
    setLoading(true);
    try {
      const userdata = await getmessage();
      console.log(userdata);
      setData(userdata.data);
      toast.success('Messages refreshed successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to refresh messages');
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const copyMessage = useCallback((message) => {
    toast.success("Message copied successfully");
    window.navigator.clipboard.writeText(message);
  }, []);

  const deleteMessageHandler = async (messageId) => {
    try {
      const data = await deletemessage(messageId);
      if (data.success) {
        toast.success("Message deleted successfully");
        setData((prevData) => prevData.filter(item => item._id !== messageId));
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete message");
    }
  };

  const deleteallhandeler = async () => {
    await deleteallmessage()
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          toast.success("All messages deleted successfully");
          setData([]);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to delete all messages");
      });
  };

  // Function to convert message box to image
  const convertToImage = async () => {
    if (messageBoxRef.current) {
      const canvas = await html2canvas(messageBoxRef.current);
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'messages.png';
      link.click();
      toast.success('Messages converted to image successfully');
    }
  };

  return (
    <div className='border border-white/15 w-4/5'>
      <div className='w-full flex items-center justify-between'>
        <span
          className='py-2 mx-4 text-white flex gap-x-2 items-center cursor-pointer'
          onClick={refresh}
        >
          <LucideRefreshCcw
            className={`mx-4 ${loading ? 'animate-spin' : ''}`}
          />
          {loading ? 'Refreshing...' : 'Refresh message box'}
        </span>

        <span className='flex items-center text-white px-6'>
          <DeleteIcon onClick={() => deleteallhandeler()} />
        </span>
      </div>

      <button onClick={convertToImage} className='btn btn-primary mt-4'>
        Convert Messages to Image
      </button>

      <div ref={messageBoxRef} className='text-white mx-auto p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6'>
        {data && data.length > 0 ? (
          data
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((item) => (
              <div key={item._id} className='border-white/15 px-6 rounded-xl'>
                <div className="chat chat-start">
                  <div className="chat-bubble chat-bubble-primary w-52 py-2">
                    <div className='flex items-center justify-between'>
                      {item?.message}
                      <Copy size={15} onClick={() => copyMessage(item.message)} />
                    </div>
                    <div className='flex items-center justify-between py-2'>
                      <div className='text-xs'>
                        {new Date(item?.createdAt).toLocaleString('en-us', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </div>
                      <div className='flex items-center space-x-2'>
                        <DeleteIcon size={15} onClick={() => deleteMessageHandler(item._id)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <p>No messages available</p>
        )}
      </div>
    </div>
  );
};

export default MassageBox;
