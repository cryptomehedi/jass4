import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound";
import ProductHome from "../Pages/Product/ProductHome";
import AboutUs from "../Pages/About-Us/AboutUs";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "/products", element: <ProductHome/>
            },
            {
                path: "/about", element: <AboutUs/>
            },
            {
                path: "*", element: <NotFound/>
            },
        ]
    },
]);