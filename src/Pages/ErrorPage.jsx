import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="text-center space-y-8">
        <div className="bg-gradient-to-r from-red-500 to-rose-600 inline-block text-transparent bg-clip-text">
          <h1 className="text-[12rem] sm:text-[15rem] font-extrabold leading-none tracking-tight">404</h1>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-200">
          Oops! Page Not Found
        </h2>
        
        <p className="text-lg sm:text-xl font-medium text-gray-400 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-4 mt-6 rounded-full font-bold text-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;