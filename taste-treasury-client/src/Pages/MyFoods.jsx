import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyFoodTableRow from "../Components/MyFoodTableRow";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function MyFoods() {
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAllFoods();
  }, [user]);
  const fetchAllFoods = async () => {
    const { data } = await AxiosSecure.get(
      `/foods/${user?.email}`,
      { withCredentials: true }
      //
    );
    setFoods(data);
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-376.8px)] bg-gray-50 dark:bg-gray-800 px-4 py-8">
      <Helmet>
        <title>My Foods | Taste Treasury</title>
      </Helmet>

      <div className="lg:mx-10">
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <>
            <h2 className="text-4xl font-bold text-center text-teal-600 dark:text-teal-400 mb-6">
              My Tasty Treasures - {foods.length}
            </h2>

            {foods.length > 0 ? (
              <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <thead>
                    <tr className="bg-teal-600 text-white">
                      <th className="py-3 px-4 text-left">Food Image</th>
                      <th className="py-3 px-4 text-left">Food Name</th>
                      <th className="py-3 px-4 text-left">Price</th>
                      <th className="py-3 px-4 text-left">Quantity</th>
                      <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foods.map((food) => (
                      <MyFoodTableRow
                        key={food._id}
                        food={food}
                        fetchAllFoods={fetchAllFoods}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <>
                <div className="text-center ">
                  <h2 className="text-red-400 text-3xl font-bold">
                    You don't have posted any foods yet! Please add some food to
                    see your food here!!
                  </h2>
                  <Link to={"/add-food"}>
                    <button className="btn bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200 mt-3">
                      Add Food
                    </button>
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
