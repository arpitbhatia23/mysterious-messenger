import React from 'react'
import Logout from './Logout'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { CgArrowsExchangeAlt } from 'react-icons/cg'
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom'
const Userdropdown = () => {
   const auth=useSelector(state=>state.auth.status)
   const navigate=useNavigate()
   const userdropdown=[
    {    id:1,
        name:"profile",
        active:auth,
        slug:"/profile",
        icon:<FaRegCircleUser size={20}/>
    },
    {    id:2,
        name:"changepass",
        active:auth,
        slug:"/changepassword",
        icon:<CgArrowsExchangeAlt size={20}/>
    },
    {
        id:3,
        name:<Logout/>,
        active:auth,
        icon:<AiOutlineLogout size={20} /> ,


    }
    
   ]
   if(auth===true){
  return (
   <>
    <div className=' shadow-lg shadow-slate-900 bg-black rounded-2xl mt-6 flex flex-col
            gap-y-4 py-4  px-2 border text-white backdrop-blur-[2px] border-white/50   items-start text-xs sm:text-base ' >
    {
        userdropdown.map((item)=>item.active?(
           
                <div key={item.id}>
               <Link to={item.slug}><button className='flex items-center gap-x-2' >{item.icon}{item.name}</button></Link> 

                </div>
           
        ):null)
        
    }

    
   
</div>
</>
  )
}
}

export default Userdropdown
