import React, { useEffect, useState } from "react";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-semibold">All Category({categories.length}) </h2>
      <div className="flex flex-col gap-3 w-full max-w-sm mx-auto mt-4">
        {categories.map((category) => (
          <button
            key={category.category_id}
            className="w-full bg-white border border-gray-300 rounded-lg px-5 py-3 text-gray-700 font-medium shadow-md hover:bg-[#D72050] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
