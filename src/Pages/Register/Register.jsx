import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

export default function Register({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name")?.trim(),
      photoURL: fd.get("photoURL")?.trim(),
      email: fd.get("email")?.trim(),
      password: fd.get("password"),
      accepted,
    };

    if (!accepted) {
      alert("Please accept the Terms & Conditions to proceed.");
      return;
    }

    onSubmit?.(payload);

    createNewUser(payload.email, payload.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        alert('Registration successful!');

        updateProfile(user, {
          displayName: payload.name, 
          photoURL: payload.photoURL
        })
          .then(() => {
            console.log("Profile updated successfully!");
          })
          .catch((error) => {
            console.log("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(`Registration failed: ${errorMessage}`);
      });
  };

  return (
    <div className="min-h-[80vh] w-full grid place-items-center px-4 py-12 bg-gray-900">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 sm:p-12 shadow-2xl border-4 border-green-500 transform transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800">
          Create a New Account
        </h1>
        <p className="text-center text-gray-500 text-base mt-2 mb-8">
          Join our community today!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-base font-semibold text-gray-800"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-full bg-gray-100 placeholder-gray-400 px-6 py-3 text-black outline-none ring-2 ring-transparent focus:ring-green-400 transition"
            />
          </div>

          {/* Photo URL Input */}
          <div className="space-y-2">
            <label
              htmlFor="photoURL"
              className="block text-base font-semibold text-gray-800"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photoURL"
              type="url"
              placeholder="Enter your photo URL"
              className="w-full rounded-full bg-gray-100 placeholder-gray-400 px-6 py-3 text-black outline-none ring-2 ring-transparent focus:ring-green-400 transition"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-full bg-gray-100 placeholder-gray-400 px-6 py-3 text-black outline-none ring-2 ring-transparent focus:ring-green-400 transition"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-base font-semibold text-gray-800"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full rounded-full bg-gray-100 placeholder-gray-400 px-6 py-3 pr-12 text-black outline-none ring-2 ring-transparent focus:ring-green-400 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-green-600 transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FiEyeOff className="h-5 w-5" />
                ) : (
                  <FiEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms & Conditions Checkbox */}
          <label className="flex items-center gap-3 text-sm text-gray-700 select-none">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-full border-gray-300 text-green-600 focus:ring-green-400"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span className="text-gray-600">
              Accept{" "}
              <Link to="/terms" className="font-semibold text-green-600 hover:underline">
                Term & Conditions
              </Link>
            </span>
          </label>

          {/* Register Button */}
          <button
            type="submit"
            disabled={!accepted}
            className="w-full rounded-full bg-gradient-to-r from-teal-500 to-green-600 text-white py-4 font-bold tracking-wide shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-red-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}