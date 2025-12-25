import React from "react";

export default function PageTitle({ title, image }) {
  return (
    <div
      className="w-full h-48 sm:h-56 md:h-64 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {title}
        </h1>
      </div>
    </div>
  );
}
