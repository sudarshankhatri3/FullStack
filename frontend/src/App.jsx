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



const router=createBrowserRouter([
  {
    path:"/",
    element:<HeaderTemplate/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"*",
    element:<>Page not found</>
  }
])

function App(){
  return <>
      <p>Hello sudarshan khatri</p>
      <RouterProvider  router={router}/>
  </>
  
}

export default App