import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";

export default function Login({ onSubmit }) {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log('location', location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get("email")?.trim(),
      password: form.get("password"),
    };

    onSubmit?.(payload);

    signInUser(payload.email, payload.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        alert('Login successful!');
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  return (
    <div className="min-h-[70vh] w-full grid place-items-center px-4 py-12 bg-gray-900">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 sm:p-12 shadow-2xl border-4 border-purple-500 transform transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 text-base mb-8">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-base font-semibold text-gray-800">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value="test@daily.com"
              required
              placeholder="Enter your email address"
              className="w-full rounded-full bg-gray-100 placeholder-gray-400 px-6 py-3 text-black outline-none ring-2 ring-transparent focus:ring-purple-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-base font-semibold text-gray-800">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                value="123456"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full rounded-full bg-gray-100 placeholder-gray-400 px-6 py-3 pr-12 text-black outline-none ring-2 ring-transparent focus:ring-purple-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-purple-600 transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
              </button>
            </div>
          </div>

         
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 font-bold tracking-wide shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.99]"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="text-center mt-4 text-red-500 text-sm font-semibold">
            {error}
          </p>
        )}

        <div className="flex justify-between items-center mt-6">
          <a href="#" className="text-sm font-medium text-purple-600 hover:underline">
            Forgot Password?
          </a>
          <p className="text-sm text-gray-600">
            New here?{" "}
            <Link to="/auth/register" className="font-bold text-red-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}