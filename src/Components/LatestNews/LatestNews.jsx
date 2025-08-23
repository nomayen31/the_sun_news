// LatestNews.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { FaRegNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="w-full bg-gray-100 shadow-md rounded-lg flex items-center gap-4 px-4 py-2 border border-gray-200">
      {/* "Latest" Button */}
      <button
        type="button"
        className="flex items-center gap-2 bg-[#D72050] text-white px-4 py-2 rounded-lg shadow hover:bg-[#b91542] transition-all duration-300 ease-in-out"
        aria-label="Latest news"
      >
        <FaRegNewspaper className="text-lg" />
        <span className="font-semibold text-sm">Latest</span>
      </button>

      {/* Marquee Section */}
      <Marquee
        pauseOnHover
        gradient={false}
        speed={60}
        className="text-gray-800 text-base font-medium"
      >
       <Link to="/news">
        <span className="mr-12">
          📰 Match Highlights: <strong>Germany</strong> vs <strong>Spain</strong> — as it happened!
        </span>
       </Link>
        <Link to="/news">
        <span className="mr-12">
          ⚡ Breaking: New transfer deals shake up the football world!
        </span>
        </Link>
        <Link to="/news">
        <span className="mr-12">
          🎯 Exclusive Interview: Star striker reveals future plans!
        </span>
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
