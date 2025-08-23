import React, { useEffect, useState } from "react";
import logo from "../../assets/the sun.svg";
import { FaRegNewspaper } from "react-icons/fa";
import moment from "moment";

const Header = () => {
  const [time, setTime] = useState(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

  // Auto-update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-[#1a1a1a] via-[#222] to-[#1a1a1a] shadow-lg ">
      <div className="flex flex-col items-center justify-center gap-3 py-6 text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[250px] md:w-[320px] transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        />

        {/* Tagline */}
        <h2 className="text-gray-300 text-sm md:text-base font-medium italic tracking-wide flex items-center gap-2">
          <FaRegNewspaper className="text-[#D72050] text-xl animate-pulse" />
          Journalism Without Fear or Favour
        </h2>

        {/* Date & Time */}
        <div className="bg-[#D72050]/10 border border-[#D72050]/30 text-gray-200 px-6 py-1 rounded-full shadow-md text-xs md:text-sm font-semibold tracking-wide">
          {time}
        </div>
      </div>
    </header>
  );
};

export default Header;
