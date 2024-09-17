import { BackgroundBeams } from './component/ui/background-beams';
import './App.css';
import Nabvar from './components/Nabvar';

import Home from './pages/Home';
import { BackgroundBeamsWithCollision } from './component/ui/background-beams-with-collision';

function App() {
 

  return (
    <>
      <div
        className="bg-cover bg-center w-screen  bg-gradient-to-b from-black to-gray-800" 
      >
 
        <Nabvar/>
     <Home/>
   
        
      </div>
    </>
  );
}

export default App;
