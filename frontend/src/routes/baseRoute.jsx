import React from "react";
import { Route } from "react-router";
import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/commonPage/landingPage.jsx";
import SignPage from "../pages/commonPage/signup.jsx";
import LoginPage from "../pages/commonPage/login";
import Product from "../pages/vendorPage/product.jsx";
import DashBoard from "../pages/dashBoard.jsx";
import VendorProduct from "../pages/vendorPage/product.jsx";
import VendorDetails from "../pages/vendorPage/vendorDetails.jsx";
import Order from "../pages/customerPage/order.jsx";
import VendorDashboard from "../pages/vendorPage/vendorAnalytic.jsx";
import VendorOrder from "../pages/vendorPage/vendorsOrder.jsx";
import Cart from "../pages/customerPage/cart.jsx";
import ProductView from "../pages/vendorPage/viewProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
    path: "/product",
    element: <Product/>,
  },
  {
    path:"/vendorProduct",
    element:<VendorProduct/>
  },
  {
    path: "/order/:id",
    element: <Order />,
  },
  {
    path: "/customerDashboard",
    element: <DashBoard />,
  },
  {
    path: "/vendorPortal",
    element: <VendorDetails />,
  },
  {
    path: "/vendorAnalysis",
    element: <VendorDashboard />,
  },
  {
    path: "/vendorOrder",
    element: <VendorOrder />,
  },
  {
    path: "carts",
    element: <Cart />,
  },
  {
    path: "/viewProduct/:userId",
    element: <ProductView />,
  },
  {
    path: "*",
    element: <>Page not found</>,
  },
]);

export default router;
