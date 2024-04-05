import { Link } from "react-router-dom";
import Logo from "../Shared/Logo";




const Login = () => {
    return (

<>
<div className="w-full max-w-md my-[13.8vh] p-10 m-auto mx-auto bg-whit rounded-lg shadow-lg dark:bg-gray-800">
  <div className="flex justify-center mx-auto h-20">
<Logo/>
  </div>
  <form className="">
    <div>
      <label  className="block text-lg text-gray-800 dark:text-gray-200">Username</label>
      <input type="text" className="block w-full text-lg px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-5">
	<label  className="block text-lg text-gray-800 dark:text-gray-200">Password</label>
      <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-6">
      <button className="w-full px-6 py-2.5 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
        Login
      </button>
    </div>
  </form>

  <div className="flex items-center mt-6 -mx-2">
    <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-lg font-medium text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:bg-red-400 focus:outline-none">
	<i className="fa-brands fa-google"></i>
      <span className="hidden mx-2 sm:inline">Continue With Google</span>
    </button>

  </div>
  <p className="mt-8 text-lg font-light text-center text-gray-400"> Do not have an account? <Link to="/create-account" className="font-medium text-gray-700 dark:text-gray-200 ">Create One</Link></p>
</div>





</>

    );
};

export default Login;