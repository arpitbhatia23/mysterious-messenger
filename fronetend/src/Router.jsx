import {createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About"
import App from "./App.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Features from "./components/Features.jsx"
import SendMessage from "./components/SendMessage.jsx"



export  const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
       children:[
        {
        path:"/",
        element:<Home/>
       },
       {
        path:"/about",
        element:<About/>
       },
       {
        path:'/features',
        element:<Features/>
       }
       ,
       {
        path:"/login",
        element:<Login/>
       },
       {
        path:"/signup",
        element:<Signup/>
       },
       {
        path:"/send-message/:receiverid",
        element:<SendMessage/>
       }
    ]
    }
])