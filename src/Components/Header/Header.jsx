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
    <header className="w-full bg-gray-900 border-b-4 border-yellow-500 shadow-2xl overflow-hidden mb-10">
      <div className="flex flex-col items-center justify-center gap-4 py-8 text-center relative z-10">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[280px] md:w-[380px] transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_0_25px_rgba(253,224,71,0.5)]"
        />

        {/* Tagline */}
        <h2 className="text-gray-300 text-lg md:text-xl font-bold tracking-wider flex items-center gap-3">
          <FaRegNewspaper className="text-yellow-500 text-2xl animate-spin-slow" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Journalism Without Fear or Favour
          </span>
        </h2>

        {/* Date & Time */}
        <div className="bg-gray-800 text-yellow-300 px-8 py-2 rounded-full shadow-lg text-sm md:text-base font-semibold tracking-wider border-2 border-yellow-500 animate-fade-in">
          {time}
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>
    </header>
  );
};

export default Header;