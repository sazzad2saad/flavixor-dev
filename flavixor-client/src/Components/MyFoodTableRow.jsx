import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import toast from "react-hot-toast";

export default function MyFoodTableRow({ food,fetchAllFoods }) {
  const AxiosSecure = useAxiosSecure();
  const { foodName, price, quantity, foodImage, _id } = food || {};

    // delete functionality
    const handleDelete = async (id) => {
      try {
        const { data } = await AxiosSecure.delete(`/food/${id}`);
        toast.success("Food Deleted Successfully!");
        fetchAllFoods();
      } catch (err) {
        toast.error(err.message);
      }
    };
  
    const modernDelete = (id) => {
      toast((t) => (
        <div className="flex gap-3 items-center">
          <div>
            <p>
              Are you <b>sure?</b>
            </p>
          </div>
          <div className="gap-2 flex">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              onClick={() => {
                toast.dismiss(t.id);
                handleDelete(id);
              }}
            >
              Yes
            </button>
            <button
              className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ));
    };


  return (
    <tr className="hover:bg-teal-50 dark:hover:bg-teal-800 transition duration-300 ease-in-out">
    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
      <img
        src={foodImage}
        alt={foodName}
        className="w-16 h-16 object-cover rounded-lg shadow-md transition-transform transform hover:scale-110"
      />
    </td>
    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-800 dark:text-white text-lg font-medium">
      {foodName}
    </td>
    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-teal-600 dark:text-teal-400 text-lg font-semibold">
      ${price}
    </td>
    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-800 dark:text-white text-lg font-medium">
      {quantity}
    </td>
    <td className="border border-gray-300 dark:border-gray-600 px-2 py-3 text-center">
      <div className="flex gap-2 justify-center items-center">
        <Link to={`/update-food/${_id}`}>
          <button className="bg-teal-600 text-white rounded-lg px-4 py-2 font-medium text-sm transition-all hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400">
          <FiEdit />
          </button>
        </Link>
  
        <button onClick={() => modernDelete(_id)} className="bg-red-600 text-white rounded-lg px-4 py-2 font-medium text-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
        <FiTrash2 />
        </button>
      </div>
    </td>
  </tr>
  
  );
}
