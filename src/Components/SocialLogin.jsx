// src/components/SocialLogin.jsx

import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SocialLogin = () => {
    const { signInWithGoogle, signInWithGithub, setUser } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser); 
                alert("Login with Google successful!");
            })
            .catch((error) => {
                console.error("Error logging in with Google:", error);
                alert("An error occurred during Google login.");
            });
    };

    const handleGithubLogin = () => {
        signInWithGithub()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
                alert("Login with GitHub successful!");
            })
            .catch((error) => {
                console.error("Error logging in with GitHub:", error);
                alert("An error occurred during GitHub login.");
            });
    };

    return (
       
        <div className="w-full bg-white rounded-xl shadow-lg p-5 sm:p-6 my-2 relative z-10">

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
                Sign in to Your Account
            </h2>
            <div className="flex flex-col space-y-4">
             
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center w-full gap-4 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-md border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 active:scale-95 active:shadow-inner"
                >
                    <FaGoogle className="text-lg text-red-500" />
                    <span>Continue with Google</span>
                </button>

       
                <button
                    onClick={handleGithubLogin}
                    className="flex items-center justify-center w-full gap-4 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-md border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-800 active:scale-95 active:shadow-inner"
                >
                    <FaGithub className="text-lg" />
                    <span>Continue with GitHub</span>
                </button>
            </div>
            <div className="flex items-center my-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-sm text-gray-500 font-medium">or</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>

            <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to='auth/register' className="font-semibold text-indigo-600 hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default SocialLogin;