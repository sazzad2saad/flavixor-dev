import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn, MdShoppingCart } from "react-icons/md";

export default function TopFoodCard({ food }) {
  const {
    foodImage,
    foodName,
    foodCategory,
    foodOrigin,
    price,
    purchaseCount,
    _id,
  } = food;

  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 left-4 bg-teal-500 text-white text-sm font-bold py-1 px-3 rounded-lg shadow-md">
          ${price}
        </div>
        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-sm font-bold py-1 px-3 rounded-lg shadow-md flex items-center gap-1">
          <MdShoppingCart className="text-base" /> {purchaseCount}
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white truncate">
          {foodName}
        </h3>
        <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
          {foodCategory}
        </p>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <MdLocationOn className="text-teal-600 dark:text-teal-400 mr-2 text-base" />
          <span>Origin: {foodOrigin}</span>
        </div>
        <Link to={`/food/${_id}`}>
          <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 transition-all duration-200 mt-3">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
