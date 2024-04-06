import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../Auth/AuthProvider';


const Navbar = () => {

  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut();
  };

    const [theme, setTheme] = useState(null);
    useEffect(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, []);
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
  return (
    <>
<div className="navbar max-w-screen-2xl container mx-auto bg-red-100 dark:bg-gray-700  lg:rounded-lg uppercase">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-xl dark:text-white lg:hidden">
      <i className="fa-solid fa-bars"></i>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-red-50 rounded-box w-52 dark:bg-gray-900 dark:text-white ">
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Home</a></li></NavLink> 
      <NavLink to="/events"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Events</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Successes</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Collection</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Contact</a></li></NavLink> 
      </ul>
    </div>
<div className="lg:w-[78%] w-[150%] h-full">
<Logo />
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-lg menu-horizontal px-1 dark:text-white">
    <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Home</a></li></NavLink> 
      <NavLink to="/events"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Events</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Successes</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Collection</a></li></NavLink> 
      <NavLink to="/"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Contact</a></li></NavLink> 
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?( <img  src={user?.photoURL} />):( <img  src="/user.png" />)}
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-red-100 dark:bg-gray-900 rounded-box w-52 dark:text-white ">
      {user ?( 
      <li className=" mb-4 rounded-md font-semibold text-black bg-gray-300 capitalize"><a>{user?.displayName}</a></li>):""}

       {user ?( 
          <NavLink to="/"><li onClick={handleLogOut} className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Logout</a></li></NavLink> 
   )
     :(
      <>
      <NavLink to="/create-account"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Register</a></li></NavLink> 
      <NavLink to="/login"><li className="hover:bg-red-500 rounded-md font-semibold hover:text-white"><a>Login</a></li></NavLink> </>
      )}
      </ul>
    </div>
{/* dark mode */}
<div className="mt-[6px] ml-2">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onClick={handleThemeSwitch} type="checkbox" />
            {/* sun icon */}
            <svg
              className="text-white swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /> 
            </svg>
            {/* moon icon */}
            <svg
              className="text-black swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

  </div>
</div>
    </>
  );
};

export default Navbar;
