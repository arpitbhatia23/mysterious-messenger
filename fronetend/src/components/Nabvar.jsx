import logo from "../assets/logos.png"
import Container from "../container/Container"
const Nabvar = ({className}) => {
 const   navItem=[
    
    { id:1, 
      name:"HOME",
      img:""
   },
   { id:2, 
      name:"ABOUT",
      img:""
   },
   { id:3, 
      name:"FEATURES",
      img:""
   },
   
  
   { id:4, 
      name:"CONTACT",
      img:""
   },
   { id:5, 
      name:"LOGIN",
      img:""
   }
 ]
  return (
   <Container>
      <div className={className}>
    <div className=' flex items-center bg-black font-imprint justify-center min-w-80 md:w-[80%] lg:w-3/5 py-6 px-4 text-white  border-2  border-blue-50 rounded-full mx-auto' >
    
     <ul className='flex items-center space-x-2 sm:space-x-6' >

       {
        navItem.map((item)=>(
        <div key={item.name} className='flex items-center text-xs sm:text-sm md:text-lg lg:text-xl px-2 '>
            <div>{item.name}</div>
        </div>
        ))
       }
</ul>
    </div>
    </div>
    </Container>
    
  )
}

export default Nabvar
