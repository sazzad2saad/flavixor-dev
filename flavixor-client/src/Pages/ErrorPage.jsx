import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 via-yellow-200 to-orange-100 dark:from-teal-800 dark:to-purple-900">
      <div className="text-center p-10 bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-xl">
        <h1 className="text-5xl font-extrabold text-red-500 dark:text-red-400">
          Oops!
        </h1>
        <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
          The page you're looking for doesn't exist.
        </p>
        <p className="text-2xl font-semibold mt-2 text-gray-600 dark:text-gray-400">
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="text-7xl font-bold text-yellow-500 dark:text-yellow-300 mt-4">
          404
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-md font-semibold hover:bg-gradient-to-l hover:from-teal-500 hover:to-blue-500 transition-all duration-200 ease-in-out dark:from-purple-500 dark:to-orange-500"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
