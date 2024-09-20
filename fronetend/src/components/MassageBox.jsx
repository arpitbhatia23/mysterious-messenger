import React, { useCallback, useEffect, useState } from 'react';
import { useMessage } from '../apis/message.api.js';
import { Copy, DeleteIcon, LucideRefreshCcw, Instagram } from 'lucide-react'; // Add Instagram icon
import toast from 'react-hot-toast';

const MassageBox = () => {
  const { getmessage, deletemessage, deleteallmessage } = useMessage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for refresh animation

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const userdata = await getmessage();
        console.log(userdata);
        setData(userdata.data); // Update state with the fetched messages
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  const refresh = async () => {
    setLoading(true); // Start loading animation
    try {
      const userdata = await getmessage();
      console.log(userdata);
      setData(userdata.data); // Update state when refreshing
      toast.success('Messages refreshed successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to refresh messages');
    } finally {
      setTimeout(() => {
        setLoading(false); // End loading animation after 2-3 seconds
      }, 2000); // 2 seconds delay to simulate the spinning effect
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

  const shareOnInstagram = (message) => {
    if (navigator.share) {
      navigator.share({
        text: message,
      })
      .then(() => toast.success("Message shared successfully"))
      .catch((error) => console.error('Sharing failed', error));
    } else {
      toast.error("Sharing is not supported on this device");
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
            className={`mx-4 ${loading ? 'animate-spin' : ''}`} // Apply spin animation when loading
          />
          {loading ? 'Refreshing...' : 'Refresh message box'}
        </span>

        <span className='flex items-center text-white px-6'><DeleteIcon onClick={() => deleteallhandeler()} /></span>
      </div>

      <div className='text-white mx-auto p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6'>
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
                        {/* <Instagram size={15} onClick={() => shareOnInstagram(item.message)} />  */}
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
