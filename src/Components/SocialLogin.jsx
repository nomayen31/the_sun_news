import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  const handleGithubLogin = () => {
    console.log("Login with GitHub");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-5 text-center">
        Login With
      </h2>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center w-full gap-3 border border-blue-400 text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium shadow-sm hover:bg-blue-50 hover:shadow-md transition-all duration-300 mb-3 text-sm sm:text-base"
      >
        <FaGoogle className="text-base sm:text-lg" />
        <span>Login with Google</span>
      </button>

      {/* GitHub Login */}
      <button
        onClick={handleGithubLogin}
        className="flex items-center justify-center w-full gap-3 border border-gray-400 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-300 text-sm sm:text-base"
      >
        <FaGithub className="text-base sm:text-lg" />
        <span>Login with GitHub</span>
      </button>
    </div>
  );
};

export default SocialLogin;
