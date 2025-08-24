import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get("email")?.trim(),
      password: form.get("password"),
    };
    onSubmit?.(payload);
  };

  return (
    <div className="min-h-[70vh] w-full grid place-items-center px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 sm:p-10 shadow-sm">
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800">
          Login your account
        </h1>

        {/* subtle divider */}
        <hr className="mt-6 mb-8 border-gray-200" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-black"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-lg bg-gray-100 placeholder-gray-400 px-4 py-3 text-black outline-none ring-1 ring-transparent focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-base font-semibold text-black"
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
                className="w-full rounded-lg bg-gray-100 placeholder-gray-400 px-4 py-3 pr-11 text-black outline-none ring-1 ring-transparent focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gray-800 text-white py-3.5 font-semibold tracking-wide hover:bg-gray-700 active:scale-[0.99] transition"
          >
            Login
          </button>
        </form>

        {/* Footer link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t Have An Account ?{" "}
          <Link
            to="/auth/register"
            className="font-semibold text-red-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
