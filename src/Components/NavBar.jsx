import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { toast } from 'react-toastify'; // Importing toast

const NavBar = () => {
  const { user, logout, auth } = useContext(AuthContext);

  const handleLogout = () => {
    logout(auth)
      .then(() => {
        // Show a success toast after successful logout
        toast.success("You have successfully logged out!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: true,
        });
      })
      .catch((error) => {
        // Show an error toast if there's an issue logging out
        console.log("Error logging out:", error);
        toast.error("An error occurred while logging out.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: true,
        });
      });
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6 text-gray-600 font-medium mx-auto">
          <Link to="/" className="hover:text-[#D72050] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#D72050] transition-colors">About</Link>
          <Link to="/career" className="hover:text-[#D72050] transition-colors">Career</Link>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <span className="text-gray-700 font-medium mr-2 hidden sm:inline">
              {user.displayName}
            </span>
          )}

          <div className="w-10 h-10 rounded-full border border-gray-300 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/300"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {!user ? (
            <Link
              to="/auth/login"
              className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition-all duration-300"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout} // Call the logout function
              className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
