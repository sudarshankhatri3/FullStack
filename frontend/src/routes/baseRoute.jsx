import React from "react";
import { Route } from "react-router";
import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/landingPage.jsx";
import SignPage from "../pages/signup";
import LoginPage from "../pages/login";
import Product from "../pages/product";
import DashBoard from "../pages/dashBoard.jsx";
import VendorProduct from "../pages/vendorProduct.jsx";
import VendorDetails from "../pages/vendorDetails.jsx";
import Order from "../pages/order.jsx";
import VendorDashboard from "../pages/vendorAnalytic.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/signUp",
    element: <SignPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/vendorProduct",
    element: <VendorProduct/>,
  },
  {
    path:"/order/:id",
    element:<Order/>
  },
  {
    path: "/customerDashboard",
    element: <DashBoard />,
  },
  {
    path:"/vendorDetails",
    element:<VendorDetails/>,
  },
  {
    path:"/vendorDashboard",
    element:<VendorDashboard/>
  },
  {
    path: "*",
    element: <>Page not found</>,
  },
]);


export default router