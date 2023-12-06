import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPanel from "./components/pages/AdminPanel.jsx";
import Layout from "./layout/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import AddProduct from "./components/pages/AddProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
      },
      {
        path: "add-product",
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
