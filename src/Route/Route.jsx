import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import OurShop from "../page/OurShop/OurShop";
import Cart from "../component/Page/OurShop/cart/Cart";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Menu from "../page/Menu/Menu";

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
        }
    
       
      ]
    },
   

  ]);

