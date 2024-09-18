import {createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About"
import App from "./App.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
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
        path:"/login",
        element:<Login/>
       },
       {
        path:"/signup",
        element:<Signup/>
       }
    ]
    }
])