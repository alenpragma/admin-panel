import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import AddProduct from "./components/pages/AddProduct.jsx";
import Login from "./components/pages/Login.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/home",
        element: <Home />,
      },
     
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
