import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LandingPage from "./pages/landingPage.jsx";
import SignPage from "./pages/signup";
import LoginPage from "./pages/login";
import Product from "./pages/product";
import DashBoard from "./pages/dashBoard.jsx";
import VendorProduct from "./pages/vendorProduct.jsx";
import VendorDetails from "./pages/vendorDetails.jsx";
import ComponentA from "./services/componentA .jsx";

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
    path: "/vendorDetails",
    element: <VendorDetails/>,
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
    path: "/full",
    element: <ComponentA/>,
  },
  {
    path: "/vendorProduct",
    element: <VendorProduct/>,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "*",
    element: <>Page not found</>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
