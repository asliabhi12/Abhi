import './App.css';
import Home from './pages/Home';
import Shop from "./pages/Shop"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Contact from "./pages/Contact"

import Register from './pages/RegisterHandler';

const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav=document.getElementById('navbar');


if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: "/shop",
    element: <Shop/>
},
{
  path: "/register",
  element: <Register/>
},
{
  path: "/contact",
  element : <Contact/>
}
])


function App() {
  return (
    <div className="App">
   
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
