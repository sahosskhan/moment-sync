import { createBrowserRouter } from "react-router-dom";
import MainLayouts from './../Layouts/MainLayouts';
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import MainEvent from "../Pages/Event/MainEvent";
import ViewEventDetails from "../Pages/Event/ViewEventDetails";
import BookingEvent from "../Pages/Event/BookingEvent";
import Login from "../Auth/Login";
import CreateAccount from "../Auth/CreateAccount";
import PrivateRoute from "./PrivateRoute";
import SuccessMain from './../Pages/Success/SuccessMain';
import Collection from "../Pages/Collection/Collection";




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
        },
        {
            path : "/confirm-event-booking/:id",
            element: <PrivateRoute> <BookingEvent/></PrivateRoute>,
            loader: () => fetch('/events.json')
        },
        {
            path : "/event-success",
            element: <SuccessMain/>,
            loader: () => fetch('/success.json')
        },
        {
            path : "/event-photo-collection",
            element: <Collection/>,
           
        },
{
    path : "/login",
    element: <Login/>,   
},
{
    path : "/create-account",
    element: <CreateAccount/>,   
}

    ]
}

]);
export default router;