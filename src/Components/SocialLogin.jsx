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
    <div className="w-full bg-white rounded-xl shadow-lg p-5 sm:p-6 my-2">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
        Sign in to Your Account
      </h2>

      {/* Social Login Buttons */}
      <div className="flex flex-col space-y-4">
        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full gap-4 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-md border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
        >
          <FaGoogle className="text-lg text-red-500" />
          <span>Continue with Google</span>
        </button>

        {/* GitHub Login */}
        <button
          onClick={handleGithubLogin}
          className="flex items-center justify-center w-full gap-4 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-md border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-800"
        >
          <FaGithub className="text-lg" />
          <span>Continue with GitHub</span>
        </button>
      </div>

      {/* Divider or alternative */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-sm text-gray-500 font-medium">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Placeholder for standard login form */}
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="#" className="font-semibold text-indigo-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default SocialLogin;