import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-5 sm:p-6 my-2">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-5 border-b pb-2">
        Find Us On
      </h2>

      {/* Social Links */}
      <div className="flex flex-col gap-3">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 border border-gray-200 rounded-lg w-full px-5 py-3 hover:bg-blue-50 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
            <FaFacebookF className="text-blue-600 text-lg" />
          </div>
          <span className="text-gray-700 font-medium text-base">Facebook</span>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 border border-gray-200 rounded-lg w-full px-5 py-3 hover:bg-blue-50 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
            <FaTwitter className="text-blue-500 text-lg" />
          </div>
          <span className="text-gray-700 font-medium text-base">Twitter</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 border border-gray-200 rounded-lg w-full px-5 py-3 hover:bg-pink-50 transition-all duration-300"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-full">
            <FaInstagram className="text-pink-500 text-lg" />
          </div>
          <span className="text-gray-700 font-medium text-base">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default FindUs;
