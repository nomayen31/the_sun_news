import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);

  return (
    <div>
      <h1>Daily Sun News Home</h1>
      <div className="mt-8 space-y-6">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
 