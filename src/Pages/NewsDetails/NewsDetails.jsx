import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import RightNav from "../../Components/Layout_components/RightNav";
import { useLoaderData, useParams } from "react-router-dom";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
  const { data: news } = useLoaderData();
  const { id } = useParams();
  const [clickedNews, setClickedNews] = useState(null);

  useEffect(() => {
    if (Array.isArray(news)) {
      const newsDetails = news.find(singleNews => singleNews._id === id);
      setClickedNews(newsDetails);
    } else {
      console.error('Data is not an array:', news);
    }
  }, [news, id]);

  return (
   <div>
  <header>
    <Header />
  </header>
  <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
    <main className="col-span-9">
      <section>
        <h2 className="font-bold mb-5">News Details</h2>
        {clickedNews ? (
          <NewsDetailsCard news={clickedNews} />
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
    <aside className="col-span-3">
      <RightNav />
    </aside>
  </main>
</div>

  );
};

export default NewsDetails;
