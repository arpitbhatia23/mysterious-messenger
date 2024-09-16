import './App.css';
import Navbar from './components/Nabvar'; // Assuming there’s a typo in 'Nabvar'
import bg from './assets/Group 1.svg';
import Hero from './components/Hero';
import { useEffect } from 'react';
import { useAuth } from './apis/auth.api';

function App() {
  const {login}=useAuth()
  const user={
   "email":"aurpitaurpit@gmail.com",
    "password":"12345678"
  }
  useEffect(() => {
    const fetch=(async()=>{
      const response= await login(user)
      console.log(response)
      
    })
    fetch()
   
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center w-screen h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar /> {/* Correcting the typo here */}
        <Hero />
      </div>
    </>
  );
}

export default App;
