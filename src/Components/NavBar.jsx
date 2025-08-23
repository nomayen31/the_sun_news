import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Center Navigation Links */}
        <div className="flex items-center gap-6 text-gray-600 font-medium mx-auto">
          <Link to="/" className="hover:text-[#D72050] transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#D72050] transition-colors">
            About
          </Link>
          <Link to="/career" className="hover:text-[#D72050] transition-colors">
            Career
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="w-10 h-10 rounded-full border border-gray-300 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pravatar.cc/300"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
