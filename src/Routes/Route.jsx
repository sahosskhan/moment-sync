import { createBrowserRouter } from "react-router-dom";
import MainLayouts from './../Layouts/MainLayouts';
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";




const router = createBrowserRouter([
{
    path: '/',
    element: <MainLayouts/>,
    errorElement: <Error/>,
    children:[

        {
            path: '/',
            element: <Home/>,
        },

    ]
}

]);
export default router;