import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white dark:bg-gray-800 dark:text-gray-200 py-10">
      <div className="lg:mx-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1 */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-yellow-400 dark:text-yellow-300">
            Flavixor
          </h2>
          <p className="text-sm text-blue-200 dark:text-gray-400 leading-relaxed">
            Simplify your restaurant management experience. Flavixor
            offers tools to manage, grow, and scale your services.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-400 dark:text-purple-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to=""
                className="hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-yellow-400 dark:hover:text-yellow-300 transition duration-300"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-red-400 dark:text-red-300">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition duration-300"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </Link>
            <Link
              to=""
              className="hover:text-blue-400 dark:hover:text-blue-300 transition duration-300"
            >
              <i className="fab fa-twitter text-xl"></i>
            </Link>
            <Link
              to=""
              className="hover:text-red-400 dark:hover:text-red-300 transition duration-300"
            >
              <i className="fab fa-instagram text-xl"></i>
            </Link>
            <Link
              to=""
              className="hover:text-blue-400 dark:hover:text-blue-300 transition duration-300"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-blue-400 dark:border-gray-600 pt-4 text-center text-sm text-blue-200 dark:text-gray-400">
        © {new Date().getFullYear()} Flavixor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
