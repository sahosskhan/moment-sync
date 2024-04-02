import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayouts = () => {
    return (
        <div className=" dark:bg-gray-800 ">
         <Navbar/>
         <Outlet/>
         <Footer/>   
        </div>
    );
};

export default MainLayouts;