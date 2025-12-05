import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Newsletter() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="mx-10">
        <Fade cascade>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">
              Stay Updated with{" "}
              <span className="text-teal-600 dark:text-teal-400">
                Taste Treasury
              </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Sign up for our newsletter to receive the latest recipes, special
              offers, and event updates directly in your inbox.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-auto px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
}
