import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setUser } = useContext(AuthContext);

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
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_CENTER, // Position toast in the center of the screen
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        // Displaying specific error messages
        if (errorCode === 'auth/invalid-email') {
          toast.error('Invalid email format!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error('Login failed. Please check your credentials.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  return (
    <div className="min-h-[70vh] w-full grid place-items-center px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 sm:p-10 shadow-sm">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800">
          Login to your account
        </h1>

        <hr className="mt-6 mb-8 border-gray-200" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-base font-semibold text-black">
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

          <div className="space-y-2">
            <label htmlFor="password" className="block text-base font-semibold text-black">
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
                {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-800 text-white py-3.5 font-semibold tracking-wide hover:bg-gray-700 active:scale-[0.99] transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t Have An Account?{" "}
          <Link to="/auth/register" className="font-semibold text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </div>

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
}
