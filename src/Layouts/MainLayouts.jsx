import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayouts = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto">
         <Navbar/>
         <Outlet/>
         <Footer/>   
        </div>
    );
};

export default MainLayouts;