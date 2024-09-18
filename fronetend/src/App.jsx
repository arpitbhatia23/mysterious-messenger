import { BackgroundBeams } from './components/ui/background-beams';
import './App.css';
import Nabvar from './components/Nabvar';

import Home from './pages/Home';
import Signup from './components/Signup';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

function App() {
 

  return (
    <>
      <div
        className=" flex justify-start  bg-black flex-col  w-screen min-h-screen  py-8" 
      >
        <Toaster/>
        <Nabvar />
     {/* <Home/>
   <Signup/> */}
   <Outlet/>
 <BackgroundBeams/>

        
      </div>
    </>
  );
}

export default App;
