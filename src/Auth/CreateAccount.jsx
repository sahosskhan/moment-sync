/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Shared/Logo";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const CreateAccount = () => {
    const { createUser, googleLogin, } = useContext(AuthContext);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const Google = () => {
      googleLogin()
        .then((result) => {
          Swal.fire({
            title: "Successfully!",
            text: "You Continue With Google ",
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
    const SignUpHandle = (e) => {
      e.preventDefault();
      setPassword("");
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      const name = form.get("name");
      const photo = form.get("photo");
    
  
  
      if (password.length < 6) {
        setPassword("Error! Password must contain minimum 6 characters");
        return;
      } else if (!/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        setPassword(
          "Error! Password must contain special characters and capital latter"
        );
        return;
      }
      createUser(email, password)
        .then((result) => {
          Swal.fire({
            title: "Successfully!",
            text: "Registration Complete.",
            icon: "success",
            confirmButtonText: "Done",
          });
          console.log(result.user);
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          });
          navigate("/");
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
      }
    return (
<>
<div className="w-full max-w-2xl my-14 p-10 m-auto mx-auto bg-gray-50 rounded-lg shadow-lg dark:bg-gray-600">
  <div className="flex justify-center mx-auto h-20">
<Logo/>
  </div>
  <form onSubmit={SignUpHandle} className="">
  <div>
      <label  className="block text-lg text-gray-800 dark:text-gray-200">Full Name</label>
      <input type="text" name="name" className="block w-full text-lg px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
  <div className="mt-5">
      <label  className="block text-lg text-gray-800 dark:text-gray-200">Photo URL</label>
      <input type="text" name="photo" className="block w-full text-lg px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
  <div className="mt-5">
      <label  className="block text-lg text-gray-800 dark:text-gray-200">Email</label>
      <input type="email" name="email" className="block w-full text-lg px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-5">
	<label  className="block text-lg text-gray-800 dark:text-gray-200">Password</label>
      <input type="password" name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-6 flex  gap-5">
      <button className="w-full px-6 py-2.5 text-lg tracking-wide text-white font-semibold capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-500 focus:bg-red-400 focus:outline-none">
        Create Account
      </button>
      <button onClick={Google} className="w-full px-6 py-2.5 text-lg tracking-wide text-white font-semibold capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-500 focus:bg-red-400 focus:outline-none">
      Continue With Google
      </button>
    </div>
  </form>

  <p className="mt-8 text-lg font-medium text-center text-gray-700 dark:text-gray-200"> Already have an account? <Link to="/login" className="font-medium hover:text-red-500 text-gray-700 dark:text-gray-200 ">Login</Link></p>
</div>





</>
    );
};

export default CreateAccount;