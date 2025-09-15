import React from "react";

const Advertisement = () => {
  return (
    <div className="mt-4 relative w-full overflow-hidden bg-gradient-to-br from-indigo-800 to-purple-900 text-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 ease-in-out hover:scale-[1.02]">
      {/* Background Shapes and Patterns for visual flair */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-64 h-64 -top-16 -right-16 bg-white rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute w-48 h-48 bottom-0 left-0 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4 tracking-tight">
          Create an Amazing <br /> Newspaper
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-sm md:text-base font-light mb-8 max-w-sm">
          Discover thousands of options, easy to customize layouts, one-click demo import, and much more.
        </p>

        {/* Button */}
        <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 transition-all duration-300 px-8 py-3 rounded-full font-bold text-lg text-white shadow-xl transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Advertisement;