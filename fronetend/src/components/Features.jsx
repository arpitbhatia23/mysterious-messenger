import React from 'react'
import { IoCodeSlash } from "react-icons/io5"
import { IoSettingsSharp } from "react-icons/io5";
import { GoDeviceDesktop } from "react-icons/go";
import { SiGitconnected } from "react-icons/si";


const Features = () => {
  return (
    <div>
      <div className='text-4xl text-white px-8 py-4 '>
        Features
        <p className='text-2xl '>Why you should choose Mysterious Messanger</p>
      </div>
      <hr />

      <div className=' grid grid-cols-1 sm:grid-cols-2  p-8 text-white'>
      <div className='  p-12 gap-y-8 border '>
        <span className='py-4'><IoCodeSlash size={40}/></span>
        <div className='text-xl text-white '>
            <h3 className='text-2xl text-blue-400 hover:text-indigo-600'>Freedom respecting software :</h3>
            <p>Our messenger prioritizes user rights and privacy, ensuring that communication is free from censorship and surveillance. Users can express themselves without fear of repercussions, fostering an open and inclusive environment.</p>    
              </div>
      </div>

      <div className='p-12 gap-y-8 border '>
        <span className='py-4'><IoSettingsSharp size={40}/></span>
        <div className='text-xl text-white '>
            <h3 className='text-2xl text-blue-400 hover:text-indigo-600'>You are in Control :</h3>
            <p>Users have complete authority over their messaging experience, with features that allow them to manage visibility, message expiration, and reply permissions. This ensures that every interaction is tailored to individual comfort levels.</p>    
              </div>
      </div>

      <div className='p-12 gap-y-8 border '>
        <span className='py-4'><GoDeviceDesktop size={40}/></span>
        <div className='text-xl text-white'>
            <h3 className='text-2xl  text-blue-400 hover:text-indigo-600'>Your Data Your Device :</h3>
            <p> We believe that users should own their data. All information is stored locally on your device, with no centralized servers collecting personal data. This guarantees that you maintain full control over your conversations and privacy.</p>    
              </div>
      </div>

      <div className='p-12 gap-y-8 border '>
      <span className='py-4'><SiGitconnected size={40}/></span>
        <div className='text-xl text-white'>
            <h3 className='text-2xl  text-blue-400 hover:text-indigo-600'>Truly Anonymous: </h3>
            <p> Our platform is designed to keep your identity hidden. With anonymous profiles and no personal information required for registration, users can communicate freely without revealing their true identities, ensuring genuine privacy.</p>    
      
</div>
</div></div>
      </div>

  )
}

export default Features
