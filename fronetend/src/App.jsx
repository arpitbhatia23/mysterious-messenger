import { BackgroundBeams } from './component/ui/background-beams';
import './App.css';
import Nabvar from './components/Nabvar';

import Home from './pages/Home';
import { BackgroundBeamsWithCollision } from './component/ui/background-beams-with-collision';

function App() {
 

  return (
    <>
      <div
        className=" flex justify-start gap-y-20  flex-col  w-screen min-h-screen bg-black py-8" 
      >
 <BackgroundBeams/>

        <Nabvar />
     <Home/>
   
        
      </div>
    </>
  );
}

export default App;
