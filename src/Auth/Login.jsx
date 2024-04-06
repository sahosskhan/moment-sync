/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Shared/Logo";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn, googleLogin, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const Google = () => {
    googleLogin()
      .then((result) => {
        Swal.fire({
          title: "Successfully!",
          text: "You Continue With Google",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const HandleLogin = (e) => {
    e.preventDefault();
  

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    

    signIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Successfully!",
          text: "You Continue With Account.",
          icon: "success",
          confirmButtonText: "Done",
        });

        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Password or user email is not correct please try again. " + err.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

    return (

<>
<Helmet>
        <title>Login | Moment Sync</title>
      </Helmet>
<div className="w-full max-w-2xl my-[13.4vh] p-10 m-auto mx-auto bg-gray-50 rounded-lg shadow-lg dark:bg-gray-600">
  <div className="flex justify-center mx-auto h-20">
<Logo/>
  </div>
  <form onSubmit={HandleLogin} className="">
  <div className="">
    <label htmlFor="email" className="block text-lg text-gray-800 dark:text-gray-200">Email</label>
    <input type="email" name="email" id="email" className="block w-full text-lg px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
  </div>
  <div className="mt-5">
    <label htmlFor="password" className="block text-lg text-gray-800 dark:text-gray-200">Password</label>
    <input type="password" name="password" id="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
  </div>
  <div className="mt-6 flex  gap-5">
    <button type="submit" className="w-full px-6 py-2.5 text-lg tracking-wide text-white font-semibold capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-500 focus:bg-red-400 focus:outline-none">
      {loading ? (<i className="animate-spin text-3xl fa-solid fa-spinner"></i>) : (" Continue With Account")}
    </button>
    <button onClick={Google} className="w-full px-6 py-2.5 text-lg tracking-wide text-white font-semibold capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-500 focus:bg-red-400 focus:outline-none">
    {loading ? (<i className="animate-spin text-3xl fa-solid fa-spinner"></i>) : (" Continue With Google")}
    </button>
  </div>
</form>

  <p className="mt-8 text-lg font-light text-center text-gray-700 dark:text-gray-200"> Do not have an account? <Link to="/create-account" className="font-medium hover:text-red-500 text-gray-700 dark:text-gray-200 ">Create One</Link></p>
</div>





</>

    );
};

export default Login;