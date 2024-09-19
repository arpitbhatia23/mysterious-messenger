import { BackgroundBeams } from './components/ui/background-beams';
import './App.css';
import Nabvar from './components/Nabvar';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useAuth } from './apis/auth.api';
import { login } from './store/slice';
function App() {
  const {currentUser,refreshToken}=useAuth()
  const dispatch=useDispatch()
  const previousPage = window.location.pathname;
  const navigate=useNavigate()
  
useEffect(()=>{
  currentUser()
  .then((data)=>{
    if (data.success===true) {
      dispatch(login(data))
  navigate(previousPage)
    }
  })
  .catch((error)=>{
   console.log(error.response.data)
   toast.error(error.response.data)
  })
refreshToken()
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})
  
},[])

  return (
    <>
      <div
        className=" flex justify-start   flex-col min-h-screen bg-black w-screen  py-8" 
      >

        <Toaster/>
        <Nabvar />
     
      <Outlet/>
        
      </div>
    </>
  );
}

export default App;
