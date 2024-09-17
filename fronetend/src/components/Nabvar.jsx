import { useSelector } from "react-redux"
import logo from "../assets/logos.png"
import Container from "../container/Container"
import Logout from "./Logout"
const Nabvar = ({className}) => {
   const isAuth=useSelector(state=>state.auth.status)
   console.log(isAuth)
 const   navItem=[
    
    { id:1, 
      name:"HOME",
      active:true,
      img:""
   },
   { id:2, 
      name:"ABOUT",   
         active:true,
      img:""
   },
   { id:3, 
      name:"FEATURES",
      active:true,
      img:""
   },
   
  
   { id:4, 
      name:"CONTACT",
      active:true,
      img:""
   },
   { id:5, 
      name:"LOGIN",
      active:!isAuth,
      img:""
   },
   
 ]
  return (
   <Container>
      <div className={className}>
    <div className=' flex items-center bg-black font-imprint justify-center min-w-80 md:w-[80%] lg:w-3/5 py-6 px-4 text-white  border-2  border-blue-50 rounded-full mx-auto' >
    
     <ul className='flex items-center space-x-2 sm:space-x-6' >

       {
        navItem.map((item)=>item.active?( 
        <div key={item.name} className='flex items-center text-xs sm:text-sm md:text-lg lg:text-xl px-2 '>
            <div>{item.name}</div>
        </div>
        ):null)
       }


</ul>
{
   isAuth&&(<Logout/>)}
    </div>
    </div>
    </Container>
    
  )
}

export default Nabvar
