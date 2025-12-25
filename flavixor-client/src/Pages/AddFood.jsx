import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../customHooks/useAxiosSecure";

export default function AddFood() {
  const { user } = useContext(AuthContext);
  const AxiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const foodName = form.get("name");
    const foodImage = form.get("image");
    const foodCategory = form.get("category");
    const quantity = parseInt(form.get("quantity"));
    const price = form.get("price");
    const foodOrigin = form.get("origin");
    const description = form.get("description");

    const newFood = {
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
      purchaseCount: 0,
    };
    try {
      // 1. make a post request
      await AxiosSecure.post(`/add-food`, newFood);
      // 2. Reset form
      e.target.reset();
      // 3. Show toast and navigate
      toast.success("Food Added Successfully!!!");
      navigate("/my-foods");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center py-6">
      <Helmet>
        <title>Add Food | Flavixor</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-teal-600 dark:text-teal-400 mb-6">
          Add New Food Item
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-teal-700 dark:text-teal-300 text-sm font-medium">
              Food Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter food name"
              required
            />
          </div>
          <div>
            <label className="block text-teal-700 dark:text-teal-300 text-sm font-medium">
              Food Image URL
            </label>
            <input
              type="url"
              name="image"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter food image URL"
              required
            />
          </div>
          <div>
            <label className="block text-teal-700 dark:text-teal-300 text-sm font-medium">
              Food Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="" className="text-gray-500">
                Select category
              </option>
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="desserts">Desserts</option>
              <option value="breakfast">Breakfast</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-teal-700 dark:text-teal-300 text-sm font-medium">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                placeholder="Enter quantity"
                required
              />
            </div>

            <div>
              <label className="block text-teal-700 dark:text-teal-300 text-sm font-medium">
                Price
              </label>
              <input
                type="number"
                name="price"
                step="0.01"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                placeholder="Enter price"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-teal-700 dark:text-teal-300 text-sm font-medium">
              Food Origin (Country)
            </label>
            <input
              type="text"
              name="origin"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter food origin"
              required
            />
          </div>
          <div>
            <label className="block text-teal-700 dark:text-teal-300 text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Enter description (ingredients, making procedure, etc.)"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
