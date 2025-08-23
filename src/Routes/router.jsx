// router.jsx
import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayout/HomeLayouts";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayouts/>
  },
  {
    path: '/news',
    element: <h1>News layout</h1>
  },
  {
    path: '/login',
    element: <h1>Login</h1>
  },
  {
    path: '*',
    element: <h1>Error</h1>
  }
]);

export default router;
