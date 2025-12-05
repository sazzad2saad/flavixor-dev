import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";
import LoadingSpinner from "./LoadingSpinner";
import { Fade, Zoom } from "react-awesome-reveal";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllFoods = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/top-foods`
      );
      setFoods(data);
      setLoading(false);
    };
    fetchAllFoods();
  }, []);
  // console.log(foods);

  return (
    <div className="mx-4 lg:mx-14 py-8">
      <h2 className="text-4xl font-extrabold text-center text-teal-600 dark:text-teal-400 mb-6">
        Top Picks for Foodies
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400 mb-6 w-11/12 md:w-7/12 mx-auto text-center">
        Explore our most popular dishes, loved by food enthusiasts for their
        flavor, quality, and authenticity. Don't miss out on these crowd
        favorites!
      </p>

      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Zoom cascade damping={0.2}>
              {foods.map((food) => (
                <TopFoodCard key={food._id} food={food}></TopFoodCard>
              ))}
            </Zoom>
          </div>
        </>
      )}
      {/* button */}
      <div className="text-center mt-8">
        <Link to="/all-foods">
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200 dark:bg-teal-600 dark:hover:bg-teal-700">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
