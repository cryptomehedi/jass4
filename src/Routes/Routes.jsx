import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound";
import ProductHome from "../Pages/Product/ProductHome";
import AboutUs from "../Pages/About-Us/AboutUs";
import ProductDetails from "../Pages/Product/ProductDetails";



export const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "products", element: <ProductHome/>,
                // children : [
                //     {
                //         path : '/product', element: <ProductDetails/>  
                //     },
                // ]
            },
            {
                path: "about", element: <AboutUs/>
            },
            {
                path: "*", element: <NotFound/>
            },
            {
                path : "products/product",  element: <ProductDetails/>
            },
        ]
    },
    
]);