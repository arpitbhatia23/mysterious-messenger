import React, { useState } from 'react'
import { useAuth } from '../apis/auth.api'
import Input from './Input'
import Container from '../container/Container'
import { HoverBorderGradient } from './ui/hover-border-gradient'
const Generatelink = () => {
    const [data,setdata]=useState([])
const generatehandeler=async()=>{
     const {generateLink}=useAuth()
      await generateLink()
      .then((data)=>{
        console.log(data)
       setdata(data)
      })
}

console.log(data)
  return (
    <Container>
         <div className='flex w-full  justify-center items-center gap-x-2 py-10'>
       <Input type="text" className="w-96" value={data.data}  />
       <HoverBorderGradient>
       <button onClick={generatehandeler}>genrate link</button>

       </HoverBorderGradient>
    </div>
    </Container>
   
  )
}

export default Generatelink
