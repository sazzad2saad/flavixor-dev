import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../customHooks/useAxiosSecure";

export default function UpdateFood() {
  const { user } = useContext(AuthContext);
  const AxiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    foodName,
    foodImage,
    foodCategory,
    quantity,
    price,
    foodOrigin,
    description,
    purchaseCount,
    _id,
  } = useLoaderData();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const foodName = form.get("name");
    const foodImage = form.get("image");
    const foodCategory = form.get("category");
    const quantity = parseInt(form.get("quantity"));
    const price = form.get("price");
    const foodOrigin = form.get("origin");
    const description = form.get("description");

    const updatedFood = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      addedBy: {
        email: user?.email,
        name: user?.displayName,
      },
      foodOrigin,
      description,
      purchaseCount: purchaseCount,
    };
    // console.log({ updatedFood });
    // send data to the server
    try {
      // 1. make a post request
      const { data } = await AxiosSecure.put(`/food/${_id}`, updatedFood);
      // console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Food Update Successfully!!!");
        navigate("/my-foods");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 dark:text-white">
      <Helmet>
        <title>Update Food | Flavixor</title>
      </Helmet>
      <h2 className="text-3xl font-semibold text-center mb-6 text-teal-600 dark:text-teal-400">
        Update Food
      </h2>
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:border dark:border-gray-700 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
              Food Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={foodName}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter food name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
              Food Category
            </label>
            <select
              name="category"
              defaultValue={foodCategory}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
            >
              <option value="" className="text-gray-500">
                Select category
              </option>
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="desserts">Desserts</option>
              <option value="snacks">Snacks</option>
              <option value="beverages">Beverages</option>
              <option value="breakfast">Breakfast</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
              Origin
            </label>
            <input
              type="text"
              name="origin"
              defaultValue={foodOrigin}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter origin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter quantity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
              Food Image URL
            </label>
            <input
              type="text"
              name="image"
              defaultValue={foodImage}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
              placeholder="Enter image URL"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-teal-700 dark:text-teal-300 mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300"
            placeholder="Enter description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
        >
          Update Food
        </button>
      </form>
    </div>
  );
}
