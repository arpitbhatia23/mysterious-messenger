import Nabvar from '../components/Nabvar.jsx'
import React from 'react'
import Hero from '../components/Hero.jsx'
import { useSelector } from 'react-redux'
import Messagepage from '../components/Messagepage.jsx'
import { BackgroundBeams } from '../components/ui/background-beams.jsx'
const Home = () => {
  const isAuth=useSelector(state=>state.auth.status)
  
  return (
    <>
   { 
    isAuth ? (
      <div>
<Messagepage/>
      </div>
    ):(
      <div className='py-20'>
{/* <BackgroundBeams/> */}
    <Hero/>

      </div>
)
   }
   </>
  )

}

export default Home
