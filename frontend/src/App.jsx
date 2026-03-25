import React from "react";
import ReactDom from "react-dom/client"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HeaderTemplate from "./components/header";
import Header from "./components/navigation";
import SignPage from "./pages/signup";
import LoginPage from "./pages/login";
import Login from "./components/loginButton";
import Product from "./pages/product";
import BabyProduct from "./components/babyProduct.jsx"
import DashBoard from "./pages/dashBoard.jsx";
import myApp from "./components/context.jsx";


const router=createBrowserRouter([
  {
    path:"/",
    element:<HeaderTemplate/>
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
    path:"product",
    element:<Product/>
  },
  {
    path:"dashboard",
    element:<DashBoard/>
  },
  {
    path:"myApp",
    element:<myApp/>
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