import './App.css';
import Navbar from './components/Nabvar'; // Assuming there’s a typo in 'Nabvar'
import bg from './assets/Group 1.svg';
import Hero from './components/Hero';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =await   fetch("http://localhost:8000/sendmessage/66d5534f08bcd6c2248f1f29", {
          message: "hi"
        });
        console.log(response.j);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
