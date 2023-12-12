import { createBrowserRouter } from "react-router-dom";
import Login from "../components/pages/Login";
import Layout from "../layout/Layout";
import Home from "../components/pages/Home";
import AddProduct from "../components/pages/AddProduct";
import Orders from "../components/pages/Orders";
import ConfirmOrder from "../components/pages/ConfirmOrder";
import CustomerInfo from "../components/pages/CustomerInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/confirm-orders",
        element: <ConfirmOrder />,
      },
      {
        path: "/dashboard/customer-info",
        element: <CustomerInfo />,
      },
    ],
  },
]);

export default router;
