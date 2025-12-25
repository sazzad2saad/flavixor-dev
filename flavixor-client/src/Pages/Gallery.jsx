import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import titleBackground from "../assets/bg.jpg";
import PageTitle from "../utilities/PageTitle";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images from your server
  useEffect(() => {
    const fetchAllFoods = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/foods?search=`
        );
        setFoods(data.result);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllFoods();
  }, []);

  // Transform food images for Lightbox
  const slides = foods.map((food) => ({
    src: food.foodImage,
    title: food.foodName,
    description: food.description,
    price: `$${food.price}`,
    origin: food.foodOrigin,
  }));

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Photo Gallery | Flavixor</title>
      </Helmet>
      <div className="min-h-screen lg:mx-10">
        <PageTitle
          title={"Gallery | Flavixor"}
          image={titleBackground}
        ></PageTitle>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            <Zoom cascade damping={0.1}>
              {" "}
              {foods.map((food, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="w-full h-56 object-cover rounded-lg shadow-md dark:shadow-none"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                    <h3 className="text-lg font-semibold">{food.foodName}</h3>
                    <p className="text-sm">{food.description}</p>
                    <p className="text-xs mt-2">Owner: {food.addedBy?.name}</p>
                  </div>
                </div>
              ))}
            </Zoom>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        plugins={[Thumbnails]}
        index={currentIndex}
        render={{
          slide: ({ slide, rect }) => (
            <div className="relative bg-black text-white rounded-lg">
              <img
                src={slide.src}
                alt={slide.title}
                style={{
                  maxHeight: rect.height,
                  maxWidth: rect.width,
                }}
                className="w-full h-auto object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4">
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="text-sm">{slide.description}</p>
                <p className="text-sm">Price: {slide.price}</p>
                <p className="text-sm">Origin: {slide.origin}</p>
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Gallery;
