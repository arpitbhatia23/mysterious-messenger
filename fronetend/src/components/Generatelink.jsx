import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAuth } from '../apis/auth.api'
import Input from './Input'
import Container from '../container/Container'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'
const Generatelink = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
      const generatehandeler=async()=>{
        const {generateLink}=useAuth()
         await generateLink()
         .then((data)=>{
           console.log(data)
          setdata(data)
         })
   }
   generatehandeler()
    },[])
const linkref=useRef()
const coyptoclipboard=useCallback(()=>{
  linkref.current?.select()
  window.navigator.clipboard.writeText(data?.data ||"")
  toast.success("copy link sucessfully")
},[data?.data])

  return (
   <>
   
         <div className=' w-[80%]  pt-20  pb-20'>
         <span className='px-6  text-lg text-white'>copy you uniqe link here</span>
         <div className='flex justify-start items-center py-5 gap-x-2'>
         <Input type="text" className="w-72" value={data?.data || ""} ref={linkref}  readOnly/>
       <HoverBorderGradient>
        
       <div onClick={coyptoclipboard} className='flex items-center '>copylink</div>

       </HoverBorderGradient>
         </div>
      

    </div>
  </>
   
  )
}

export default Generatelink
