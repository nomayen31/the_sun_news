import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
  const { user, logout, auth } = useContext(AuthContext);

  const handleLogout = () => {
    logout(auth)
      .then(() => {
        alert("You have successfully logged out!");
      })
      .catch((error) => {
        // console.log("Error logging out:", error);
        alert("An error occurred while logging out.");
      });
  };

  return (
    <nav className="w-full bg-white shadow-xl border-b-4 border-indigo-500 relative z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center">
          <Link to="/" className="text-3xl font-extrabold text-indigo-600 transition-colors hover:text-indigo-800">
            📰 The Daily Sun
          </Link>
        </div>

        <div className="flex items-center gap-8 text-gray-700 font-bold mx-auto">
          <Link 
            to="/" 
            className="group relative transition-colors hover:text-indigo-600"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link 
            to="/about" 
            className="group relative transition-colors hover:text-indigo-600"
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link 
            to="/career" 
            className="group relative transition-colors hover:text-indigo-600"
          >
            Career
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <Link 
                to="/auth/updateprofile" 
                className="group relative font-bold text-green-500 transition-colors hover:text-green-700"
              >
                Update Profile
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              
              <span className="text-gray-700 font-medium mr-2 hidden sm:inline">
                Hi, <strong className="text-indigo-600">{user.displayName}</strong>
              </span>
            </>
          )}

          <div className="w-12 h-12 rounded-full border-4 border-indigo-500 overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-indigo-300">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/300"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4">
            {!user ? (
              <Link
                to="/auth/login"
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all duration-300 transform hover:bg-indigo-700 hover:scale-105"
              >
                Log In
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all duration-300 transform hover:bg-red-600 hover:scale-105"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;