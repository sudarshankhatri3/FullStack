import React from "react";
import ReactDom from "react-dom/client"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HeaderTemplate from "./components/header";
import Header from "./components/navigation";
import SignPage from "./pages/signup";
import LoginPage from "./pages/login";
import ListCategory from "./components/listCategory";
import Login from "./components/loginButton";
import Product from "./pages/product";
import Nutri from "./components/Nutri";




const router=createBrowserRouter([
  {
    path:"/",
    element:<Nutri/>
  },
  {
    path:"/signUp",
    element:<SignPage/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"navigation",
    element:<ListCategory/>
  },
  {
    path:"product",
    element:<Product/>
  },
  {
    path:"*",
    element:<>Page not found</>
  }
])

function App(){
  return <>
      <RouterProvider  router={router}/>
  </>
  
}

export default App