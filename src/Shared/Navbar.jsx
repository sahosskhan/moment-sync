import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
  return (
    <>
<div className="navbar bg-red-100 rounded-lg uppercase">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-red-50 rounded-box w-52 ">
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Home</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Events</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Successes</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>About</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Contact</a></li></NavLink> 
      </ul>
    </div>
  <Logo/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-lg menu-horizontal px-1 ">
    <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Home</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Events</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Successes</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>About</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Contact</a></li></NavLink> 
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src="/user.png" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-red-100 rounded-box w-52 ">
      <NavLink to="/"><li className=" mb-2 rounded-md font-semibold hover:bg-red-100 capitalize"><a>Sahoss Khan</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Register</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Login</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Logout</a></li></NavLink> 
      </ul>
    </div>
  </div>
</div>
    </>
  );
};

export default Navbar;
