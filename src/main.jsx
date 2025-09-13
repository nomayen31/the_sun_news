import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Your CSS styles
import { RouterProvider } from "react-router-dom"; // For routing
import router from "./Routes/router.jsx"; // Your router configuration
import AuthProvider from "./Provider/AuthProvider.jsx"; // Your AuthProvider for user context
import { ToastContainer } from "react-toastify"; // For toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

// Creating the root of the application and rendering the components
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer /> {/* Toast notifications container */}
    </AuthProvider>
  </StrictMode>
);
