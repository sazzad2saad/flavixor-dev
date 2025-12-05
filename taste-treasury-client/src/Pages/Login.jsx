import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "../Components/GoogleLogin";

export default function Login() {
  const { loginUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Helmet>
        <title>Login | Taste Treasury</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-4xl font-semibold text-center text-teal-600 dark:text-teal-300 mb-8 tracking-wide">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin}>
          {/* email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border-2 border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200 ease-in-out"
              required
            />
          </div>

          {/* Password*/}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border-2 border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200 ease-in-out"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-teal-500 dark:text-teal-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Login*/}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-lg hover:bg-gradient-to-l hover:from-teal-600 hover:to-teal-500 transition duration-200 ease-in-out"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-teal-600 font-medium hover:underline dark:text-teal-400"
          >
            Register here
          </Link>
        </p>

        {/* Google Login */}
        <div className="mt-8 flex justify-center">
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}
