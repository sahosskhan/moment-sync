import { Link } from "react-router-dom";
import Logo from "../Shared/Logo";

const CreateAccount = () => {
    return (
<>
<div className="w-full max-w-2xl my-14 p-10 m-auto mx-auto bg-gray-50 rounded-lg shadow-lg dark:bg-gray-600">
  <div className="flex justify-center mx-auto h-20">
<Logo/>
  </div>
  <form className="">
  <div>
      <label  className="block text-lg text-gray-800 dark:text-gray-200">Full Name</label>
      <input type="text" className="block w-full text-lg px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
  <div className="mt-5">
      <label  className="block text-lg text-gray-800 dark:text-gray-200">Photo URL</label>
      <input type="text" className="block w-full text-lg px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
  <div className="mt-5">
      <label  className="block text-lg text-gray-800 dark:text-gray-200">Email</label>
      <input type="email" className="block w-full text-lg px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-5">
	<label  className="block text-lg text-gray-800 dark:text-gray-200">Password</label>
      <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-6 flex  gap-5">
      <button className="w-full px-6 py-2.5 text-lg tracking-wide text-white font-semibold capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-500 focus:bg-red-400 focus:outline-none">
        Create Account
      </button>
      <button className="w-full px-6 py-2.5 text-lg tracking-wide text-white font-semibold capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-gray-500 focus:bg-red-400 focus:outline-none">
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