import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function FoodDetails() {
  const {
    foodName,
    foodCategory,
    price,
    foodOrigin,
    quantity,
    foodImage,
    description,
    purchaseCount,
    _id,
  } = useLoaderData();

  const navigate = useNavigate();

  const handlePurchase = () => {
    if (quantity > 0) {
      navigate(`/purchase-food/${_id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Helmet>
        <title>{foodName} | Flavixor</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row transition-all duration-300 ease-in-out">
        {/* Food Image */}
        <motion.div
          className="relative lg:w-1/2 group mb-8 lg:mb-0"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.3 },
          }}
        >
          <img
            src={foodImage}
            alt={foodName}
            className="w-full max-h-[420px] object-cover rounded-2xl transition-all duration-300"
          />
          <div className="absolute top-4 right-4 text-white font-bold text-xl bg-teal-500 dark:bg-teal-600 px-4 py-2 rounded-full shadow-lg">
            ${price}
          </div>
        </motion.div>

        {/* Food Details */}
        <div className="lg:w-1/2 p-8 space-y-6 bg-white dark:bg-gray-900">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-wide transition-all duration-200 hover:text-teal-500">
            {foodName}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {description}
          </p>
          <div className="grid grid-cols-2 gap-8 mt-4 text-sm sm:text-base">
            <div>
              <p className="font-medium text-teal-500 dark:text-teal-400">
                Category
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                {foodCategory}
              </p>
            </div>
            <div>
              <p className="font-medium text-teal-500 dark:text-teal-400">
                Origin
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                {foodOrigin}
              </p>
            </div>
            <div>
              <p className="font-medium text-teal-500 dark:text-teal-400">
                Quantity
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                {quantity}
              </p>
            </div>
            <div>
              <p className="font-medium text-teal-500 dark:text-teal-400">
                Purchase Count
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                {purchaseCount}
              </p>
            </div>
          </div>

          <button
            onClick={handlePurchase}
            disabled={quantity === 0}
            className={`w-full py-4 text-lg font-bold rounded-lg transition-all duration-300 ${
              quantity > 0
                ? "bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
                : "bg-gray-400 dark:bg-gray-700 text-gray-700 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            {quantity > 0 ? "Purchase Now" : "Out of Stock"}
          </button>

          {quantity === 0 && (
            <p className="text-red-600 dark:text-red-400 text-center mt-4">
              Sorry, this item is out of stock.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
