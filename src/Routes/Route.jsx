import { createBrowserRouter } from "react-router-dom";
import MainLayouts from './../Layouts/MainLayouts';
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import MainEvent from "../Pages/Event/MainEvent";
import ViewEventDetails from "../Pages/Event/ViewEventDetails";




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
        {
            path: '/events',
            element: <MainEvent/>,
            loader: () => fetch('/events.json')
        },
        {
            path : "/view-event-details/:id",
            element: <ViewEventDetails/>,
            loader: () => fetch('/events.json')
        }

    ]
}

]);
export default router;