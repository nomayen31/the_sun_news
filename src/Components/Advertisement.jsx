import React from "react";

const Advertisement = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-xl shadow-lg px-8 pt-8 pb-4 text-center">
      {/* Title */}
      <h2 className="text-2xl font-extrabold leading-snug mb-4">
        Create an Amazing <br /> Newspaper
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-6">
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>

      {/* Button */}
      <button className="bg-[#D72050] hover:bg-[#b91542] transition-all duration-300 px-6 py-2 rounded-md font-semibold text-white shadow-md">
        Learn More
      </button>
    </div>
  );
};

export default Advertisement;
