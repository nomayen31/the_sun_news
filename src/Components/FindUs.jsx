import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl p-6 my-4 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-2xl">

      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-indigo-500 pb-2">
        Find Us On
      </h2>


      <div className="flex flex-col gap-4">

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl w-full px-6 py-4 bg-blue-600 text-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
            <FaFacebookF className="text-blue-600 text-xl" />
          </div>
          <span className="font-semibold text-lg">Facebook</span>
        </a>


        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl w-full px-6 py-4 bg-black text-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
            <FaTwitter className="text-black text-xl" />
          </div>
          <span className="font-semibold text-lg">Twitter</span>
        </a>


        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl w-full px-6 py-4 bg-gradient-to-tr from-yellow-400 to-pink-500 text-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
            <FaInstagram className="text-pink-500 text-xl" />
          </div>
          <span className="font-semibold text-lg">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default FindUs;