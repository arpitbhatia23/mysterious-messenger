import Nabvar from '../components/Nabvar.jsx'
import React from 'react'
import Hero from '../components/Hero.jsx'
import { BackgroundBeamsWithCollision } from '../component/ui/background-beams-with-collision.jsx'

const Home = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
     <Hero/>
     </BackgroundBeamsWithCollision>

        

    </div>
  )
}

export default Home
