import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-500 pb-3 mb-6">
        All Categories
      </h2>

      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <NavLink
            key={category.category_id}
            to={`/category/${category.category_id}`}
            className={({ isActive }) =>
              `w-full rounded-xl px-6 py-4 font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]
              ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
              }`
            }
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;