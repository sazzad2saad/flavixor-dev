import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import {
  FaThumbsUp,
  FaClock,
  FaSeedling,
  FaHeadset,
  FaShippingFast,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaSeedling className="text-teal-600 text-4xl" />,
    title: "Fresh Ingredients",
    description:
      "We only use farm-fresh ingredients to ensure the best flavors in every bite.",
  },
  {
    id: 2,
    icon: <FaClock className="text-blue-600 text-4xl" />,
    title: "Fast Service",
    description:
      "Lightning-fast delivery and prompt service to satisfy your cravings on time.",
  },
  {
    id: 3,
    icon: <FaThumbsUp className="text-yellow-600 text-4xl" />,
    title: "Trusted by Thousands",
    description: "A loyal customer base that loves and trusts our quality.",
  },
  {
    id: 4,
    icon: <FaHeadset className="text-red-600 text-4xl" />,
    title: "24/7 Customer Support",
    description: "Our support team is here round-the-clock to assist you.",
  },
  {
    id: 5,
    icon: <FaShippingFast className="text-purple-600 text-4xl" />,
    title: "Free Shipping",
    description: "Enjoy free shipping on all your favorite meals, anytime.",
  },
  {
    id: 6,
    icon: <FaAward className="text-orange-600 text-4xl" />,
    title: "Award-Winning Service",
    description:
      "Recognized for our excellence in quality and customer satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="lg:mx-10">
        <div className="text-center mb-12">
          <Fade cascade>
            {" "}
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">
              Why Choose <span className="text-blue-600">Taste Treasury</span>?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 md:w-10/12 mx-auto">
              We are committed to delivering the best food experience with
              unmatched quality, speed, and customer care.
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Zoom cascade damping={0.1}>
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl"
              >
                <div
                  className={`p-4 rounded-full ${
                    feature.id === 1
                      ? "bg-teal-100 dark:bg-gray-900"
                      : feature.id === 2
                      ? "bg-blue-100 dark:bg-gray-900"
                      : feature.id === 3
                      ? "bg-yellow-100 dark:bg-gray-900"
                      : feature.id === 4
                      ? "bg-red-100 dark:bg-gray-900"
                      : feature.id === 5
                      ? "bg-purple-100 dark:bg-gray-900"
                      : "bg-orange-100 dark:bg-gray-900"
                  }`}
                >
                  {feature.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
}
