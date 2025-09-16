// LatestNews.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-purple-600 to-indigo-700 p-2 border-2 border-purple-500">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-20 h-20 -top-4 -left-4 bg-white rounded-full"></div>
        <div className="absolute w-32 h-32 -bottom-8 -right-8 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 flex items-center gap-4 px-4 py-2">
        <button
          type="button"
          className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-5 py-2.5 rounded-full font-bold uppercase text-sm tracking-wider shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          aria-label="Latest news"
        >
          <FaRegNewspaper className="text-xl text-red-600" />
          <span>Latest</span>
        </button>

        <Marquee
          pauseOnHover
          gradient={false}
          speed={70}
          className="text-white text-lg font-semibold"
        >
          <Link to="/news">
            <span className="mr-24 flex items-center gap-2">
              <span className="text-xl animate-pulse">📰</span>
              Match Highlights: <strong className="text-yellow-200">Germany</strong> vs <strong className="text-yellow-200">Spain</strong>
            </span>
          </Link>
          <Link to="/news">
            <span className="mr-24 flex items-center gap-2">
              <span className="text-xl animate-pulse">⚡</span>
              Breaking: New transfer deals shake up the football world!
            </span>
          </Link>
          <Link to="/news">
            <span className="mr-24 flex items-center gap-2">
              <span className="text-xl animate-pulse">🎯</span>
              Exclusive Interview: Star striker reveals future plans!
            </span>
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;