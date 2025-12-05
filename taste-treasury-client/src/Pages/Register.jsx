import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

export default function Register() {
  const { registerUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (password.length < 6) {
      setError("Password must be 6 characters or longer.");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    }
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User registered successfully");
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-purple-200 to-blue-100  dark:from-gray-800 dark:via-gray-900 dark:to-black flex items-center justify-center">
      <Helmet>
        <title>Register | Taste Treasury</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-300 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-2 border-2 border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-teal-600 dark:text-white transition duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border-2 border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-teal-600 dark:text-white transition duration-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-full mt-2 px-4 py-2 border-2 border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-teal-600 dark:text-white transition duration-200"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 border-2 border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-teal-600 dark:text-white transition duration-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-9 text-gray-500 dark:text-gray-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-teal-600 font-medium hover:underline dark:text-teal-400"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
