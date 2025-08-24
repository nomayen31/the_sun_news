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
    <div>
      <h2 className="font-semibold">
        All Category ({categories.length})
      </h2>

      <div className="flex flex-col gap-3 w-full max-w-sm mx-auto mt-4">
        {categories.map((category) => (
          <NavLink
            key={category.category_id}
            to={`/category/${category.category_id}`}
            className={({ isActive }) =>
              `w-full rounded-lg px-5 py-3 font-medium transition-all duration-300 ease-in-out border shadow-md
              ${
                isActive
                  ? "bg-[#D72050] text-white border-[#D72050] shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#D72050] hover:text-white hover:shadow-lg"
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
