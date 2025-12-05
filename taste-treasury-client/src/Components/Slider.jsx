import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className=" pt-5 mx-4 lg:mx-14">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">
                  Welcome to Taste Treasury
                </h1>
                <p className="mb-5 text-white dark:text-gray-300">
                  Discover a world of flavors! Explore our curated selection of delectable dishes and satisfy your cravings.
                </p>
                <Link to={"/all-foods"}>
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-teal-700 dark:hover:bg-teal-500 transition">
                    Explore All Foods
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                  Savor Every Bite
                </h1>
                <p className="mb-5 text-white  dark:text-gray-300">
                  From hearty meals to tempting treats, Taste Treasury has it all. Let the feast begin!
                </p>
                <Link
                  to="/all-foods"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">
                  Flavors Beyond Borders
                </h1>
                <p className="mb-5 text-white  dark:text-gray-300">
                  Uncover unique recipes and irresistible cuisines from across the globe. Taste the world today!
                </p>
                <Link
                  to="/all-foods"
                  className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-teal-700 dark:hover:bg-teal-500 transition"
                >
                  View All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
