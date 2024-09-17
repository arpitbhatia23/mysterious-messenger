import Container from "../container/Container"
import { HoverBorderGradient } from "./ui/hover-border-gradient"

const Hero = () => {
  return (
    <Container>
    <div className='w-full  flex flex-col justify-center h-5/6  items-center gap-y-12 text-white'>
    
       <p className=' font-imprint flex flex-col items-center z-50  text-xs sm:text-sm md:text-lg lg:text-4xl'>
    Send Anonymous Messages, Get Honest Feedback   
       </p> 
       <p className='text-xs sm:text-sm md:text-lg lg:text-2xl font-serif'>Let your friends or followers express themselves without revealing their identity</p>
       <HoverBorderGradient>
        <div className="text-xs sm:text-sm md:text-lg lg:text-xl">START NOW</div>
       
       </HoverBorderGradient>
    </div>
    </Container>
  )
}

export default Hero
