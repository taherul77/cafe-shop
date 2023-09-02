import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import OurShop from "../page/OurShop/OurShop";

import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Menu from "../page/Menu/Menu";
import Cart from "../page/Cart/Cart";
import Checkout from "../page/CheckOut/Checkout";
import Dashboard from "../page/Dashboard/Dashboard";
import Summary from "../page/Summary/Summary";
import Customers from "../page/Customers/Customers";
import Orders from "../page/Orders/Orders";
import Product from "../page/Product/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Summary></Summary>,
          },
          {
            path: "/dashboard/summary",
            element: <Summary></Summary>,
          },
          {
            path: "/dashboard/customers",
            element: (
                
                    <Customers />
                
            ),
        },
        {
          path: "/dashboard/orders",
          element: (
              
                  <Orders />
              
          ),
      },
      {
        path: "/dashboard/products",
        element: (
            
                <Product />
            
        ),
    },
        ],
      },
    ],
  },
]);
