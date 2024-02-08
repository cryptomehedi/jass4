import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound";
import ProductHome from "../Pages/Product/ProductHome";
import AboutUs from "../Pages/About-Us/AboutUs";
import ProductDetails from "../Pages/Product/ProductDetails";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact-Us/Contact";
import TermesAndConditions from "../Pages/TermsAndConditions/TermesAndConditions";
import FAQ from "../Pages/TermsAndConditions/FAQ";
import Privacy from "../Pages/TermsAndConditions/Privacy";
import Cookies from "../Pages/TermsAndConditions/Cookies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement : <NotFound/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        errorElement : <ProductHome/>,
        children: [
            {
                index : true,
                element : <ProductHome/>
            },
            {
                path : "product/:id",
                errorElement : <ProductHome/>,
                element : <ProductDetails/>,
            },
            // {
            //     path: 'product',
            //     children: [
            //         {
            //             path : ':id',
            //             element : <ProductDetails/>,
            //         }
            //     ]
            // }
        ]
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "T&C",
        element: <TermesAndConditions />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "cookies",
        element: <Cookies />,
      },
    ],
  },
]);
