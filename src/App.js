import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./pages/Contact";

import Register from "./components/Register";
import Login from "./components/Login";
import Single from "./pages/Single";
import { createContext, useState } from "react";

export const GlobalInfo = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/single",
    element: <Single />,
  },
]);

function App() {

  
  const [auth, setAuth] = useState({
    auth : 0,
    //page: 0 - login, page: 1 = regist
     page: 1,
     message:"",
     // type 0 - error, 1- success 
     type: 1,
  })

  const getAuth = (item) => {
    console.log(item)
    setAuth(item)
  }
 console.log(auth.auth)
  return (
    <GlobalInfo.Provider value={{auth:auth.auth, page: auth.page, message: auth.message, type: auth.type, getAuth}}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </GlobalInfo.Provider>
  );
}

export default App;
