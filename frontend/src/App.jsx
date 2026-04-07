import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./routes/baseRoute";



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
