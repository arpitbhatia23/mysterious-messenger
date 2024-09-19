import React from 'react'
import Generatelink from './Generatelink';
import MassageBox from './MassageBox';
import { useSelector } from 'react-redux';
const Messagepage = () => {
  const userdata=useSelector(state=>state.auth.userData)
  console.log(userdata)
  return (
    <div className='flex flex-col items-center justify-end  w-screen '>
      <span className='py-6 text-2xl text-white'>wellcome {userdata.data.fullName}</span>
        <Generatelink/>
        <MassageBox/>
</div>
  )
}

export default Messagepage
