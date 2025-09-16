import React from "react";

const Advertisement = () => {
  return (
    <div className="mt-4 relative w-full overflow-hidden bg-gradient-to-tr from-cyan-600 to-blue-800 text-white rounded-2xl shadow-2xl p-8 transform transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-3/4 h-3/4 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-8 border-white border-opacity-5 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-screen opacity-5 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-300 rounded-full mix-blend-screen opacity-5 transform translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4 tracking-tight">
          Ready to Make a <br /> Change?
        </h2>


        <p className="text-blue-100 text-sm md:text-base font-light mb-8 max-w-sm">
          Join our community and unlock exclusive features, tailored content, and a world of opportunities.
        </p>

        <button className="bg-white text-blue-800 hover:bg-gray-100 transition-all duration-300 px-8 py-3 rounded-full font-bold text-lg shadow-xl transform hover:scale-105">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};
  
export default Advertisement;