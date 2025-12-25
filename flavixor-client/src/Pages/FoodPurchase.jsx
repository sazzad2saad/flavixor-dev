import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../customHooks/useAxiosSecure";

export default function FoodPurchase() {
  const { user } = useContext(AuthContext);
  const AxiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const [buyingDate, setBuyingDate] = useState(new Date().toLocaleString());
  const [orderQuantity, setOrderQuantity] = useState(1);
  const {
    foodName,
    foodImage,
    price,
    foodOrigin,
    quantity,
    foodCategory,
    description,
    purchaseCount,
    _id,
    addedBy,
  } = useLoaderData();

  const totalPrice = price * orderQuantity;

  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const orderQuantity = parseInt(form.quantity.value);

    const order = {
      foodName: foodName,
      foodImage: foodImage,
      totalPrice: totalPrice,
      orderQuantity,
      foodOwner: addedBy?.email,
      foodId: _id,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      buyingTime: buyingDate,
    };
    // console.log(order);

    if (user?.email === addedBy?.email)
      return toast.error(`You can't buy your own food!`);

    if (orderQuantity > quantity)
      return toast.error(
        `You can't purchase more than the available quantity!`
      );

    try {
      const { data } = await AxiosSecure.post(`/add-order`, order);
      toast.success("Order Successful!!!");
      // console.log(data);
      navigate("/my-orders");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data);
    }
  };

  return (
    <div className="min-h-[calc(100vh-376.8px)] bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <Helmet>
        <title>Buy {foodName} | Flavixor</title>
      </Helmet>
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* card */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative">
            <img
              src={foodImage}
              alt={foodName}
              className="w-full h-64 md:max-h-[480px] object-cover"
            />
            <span className="absolute top-4 left-4 bg-teal-600 dark:bg-teal-500 text-white text-sm px-3 py-1 rounded-lg shadow">
              {foodCategory}
            </span>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {foodName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                <strong>Origin:</strong> {foodOrigin}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                ${price}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Available:</strong> {quantity}
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Complete Your Purchase
          </h3>
          <form
            onSubmit={handlePurchase}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center">
              <label
                htmlFor="quantity"
                className="mr-4 text-sm text-gray-600 dark:text-gray-400"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={orderQuantity}
                onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
                className="w-20 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-center focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Total: <span className="text-teal-600 dark:text-teal-400">${totalPrice}</span>
            </p>
            <button
              type="submit"
              className="ml-auto bg-teal-600 dark:bg-teal-500 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 dark:hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
            >
              Confirm Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
