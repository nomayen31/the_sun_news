// router.jsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayout/HomeLayouts";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayouts/>,
    children:[
      {
        path:'' ,
        element: <Navigate to={"/category/01"} />
      },
      {
        path:'category/:id',
        element: <CategoryNews/>,
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path: '/news/:id',
    element: <NewsDetails/>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: '/auth',
    element: <AuthLayout/>,
    children:[
      {
        path:'/auth/login',
        element:<Login/>
      },
      {
        path:'/auth/register',
        element:<Register/>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]);

export default router;
