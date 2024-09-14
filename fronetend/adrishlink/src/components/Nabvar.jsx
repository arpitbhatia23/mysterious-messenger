import logo from "../assets/logos.png"
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
    <div className=' flex items-center  font-imprint justify-center h-[100px] text-[25px] w-full text-white'>
     <ul className=''>
      <img src={logo} alt="" className='h-16' />
     </ul>
     <ul className='flex items-center' >
       {
        navItem.map((item)=>(
        <div key={item.name} className='flex items-center px-12   '>
            <div>{item.name}</div>
        </div>
        ))
       }
</ul>
    </div>
  )
}

export default Nabvar
