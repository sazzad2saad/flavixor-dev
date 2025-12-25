import axios from "axios";
import React, { useEffect, useState } from "react";
import AllFoodsCard from "../Components/AllFoodsCard";
import titleBackground from "../assets/bg.jpg";
import PageTitle from "../utilities/PageTitle";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function AllFoods() {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [count, setCount] = useState(0);
  // console.log(count);

  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    const fetchAllFoods = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/foods?search=${search}&page=${currentPage}&size=${itemPerPage}`
      );

      // console.log(data);

      setFoods(data.result);
      setCount(data.totalCount);
      setLoading(false);
    };
    fetchAllFoods();
  }, [search, currentPage, itemPerPage]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages?.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800  p-4 ">
      <Helmet>
        <title>All Foods | Taste Treasury</title>
      </Helmet>
      <div className="flex flex-col items-center lg:mx-10">
        {/* call pageTitle component */}
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <>
            <PageTitle
              title={"All Foods | Taste Treasury"}
              image={titleBackground}
            ></PageTitle>

            {/* Search Bar */}
            <div className="mb-6 mt-10 w-full sm:w-96">
              <input
                type="text"
                onChange={handleSearch}
                placeholder="Search for food..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* empty search */}
            {foods.length === 0 && search && (
              <div className="text-center text-xl text-gray-500 dark:text-gray-400 mt-8">
                No foods found for "{search}". Try a different search.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {foods.map((food) => (
                <AllFoodsCard key={food._id} food={food}></AllFoodsCard>
              ))}
            </div>
            <div className="text-center my-8 space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={handlePrevPage}
                  className="px-3 py-2 text-white rounded-md bg-teal-500 font-semibold hover:bg-teal-600 transition-colors duration-200 disabled:opacity-30"
                  disabled={currentPage === 0}
                >
                  Prev
                </button>
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-md transition ${
                      currentPage === page
                        ? "bg-teal-500 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {page + 1}
                  </button>
                ))}
                <button
                  onClick={handleNextPage}
                  className="px-3 py-2 text-white rounded-md bg-teal-500 font-semibold hover:bg-teal-600 transition-colors duration-200 disabled:opacity-30"
                  disabled={currentPage === pages.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
