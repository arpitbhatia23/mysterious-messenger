import Nabvar from '../components/Nabvar.jsx'
import React from 'react'
import Hero from '../components/Hero.jsx'
import { useSelector } from 'react-redux'

const Home = () => {
  const isAuth=useSelector(state=>state.auth.status)
  
  return (
    <>
   { 
    isAuth ? (
      <div>

      </div>
    ):(
      <div className='py-20'>
    <Hero/>

      </div>
)
   }
   </>
  )

}

export default Home
