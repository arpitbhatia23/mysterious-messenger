import logo from "../assets/logos.png"
import Container from "../container/Container"
const Nabvar = () => {
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
      name:"HOW IT WORKS ",
      img:""
   },
   { id:5, 
      name:"FAQ",
      img:""
   },
   { id:5, 
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
    <div className=' flex items-center  font-imprint justify-center h-[100px]  w-full text-white'>
    
     <ul className='flex items-center gap-x-12' >
     <img src={logo} alt="" className='h-16' />

       {
        navItem.map((item)=>(
        <div key={item.name} className='flex items-center   '>
            <div>{item.name}</div>
        </div>
        ))
       }
</ul>
    </div>
    </Container>
  )
}

export default Nabvar