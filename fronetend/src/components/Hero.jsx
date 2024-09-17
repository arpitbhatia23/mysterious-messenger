import Container from "../container/Container"

const Hero = () => {
  return (
    <Container>
    <div className='w-full  flex flex-col justify-center h-4/6  items-center gap-y-12 text-white'>
    
       <p className='text-5xl font-imprint'>Send Anonymous Messages, Get Honest Feedback
       </p> 
       <p className='text-2xl font-serif'>Let your friends or followers express themselves without revealing their identity</p>
       <div className='w-56 h-20 rounded-[40px] bg-[#FF007F] text-black flex justify-center items-center font-serif z-50'> START NOW</div>
    </div>
    </Container>
  )
}

export default Hero
