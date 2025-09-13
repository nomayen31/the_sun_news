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

    if (!accepted) return;

    onSubmit?.(payload);

    createNewUser(payload.email, payload.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        updateProfile(user, {
          displayName: payload.name, 
        })
          .then(() => {
            console.log("Display name updated");
          })
          .catch((error) => {
            console.log("Error updating display name:", error);
          });
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="min-h-[80vh] w-full grid place-items-center px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-10 shadow-sm">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800">
          Register your account
        </h1>
        <hr className="mt-6 mb-8 border-gray-200" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-base font-semibold text-black"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg bg-gray-100 placeholder-gray-400 px-4 py-3 text-black outline-none ring-1 ring-transparent focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="photoURL"
              className="block text-base font-semibold text-black"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photoURL"
              type="url"
              placeholder="Enter your photo URL"
              className="w-full rounded-lg bg-gray-100 placeholder-gray-400 px-4 py-3 text-black outline-none ring-1 ring-transparent focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-black"
            >
              Email
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
                onClick={() => setShowPassword((s) => !s)}
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

          <label className="flex items-center gap-3 text-sm text-gray-700 select-none">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-gray-800 focus:ring-gray-400"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span>
              Accept{" "}
              <span className="font-semibold">Term &amp; Conditions</span>
            </span>
          </label>

          <button
            type="submit"
            disabled={!accepted}
            className="w-full rounded-lg bg-gray-800 text-white py-3.5 font-semibold tracking-wide hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Do you Have An Account ?{" "}
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
