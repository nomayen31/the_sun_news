import React from "react";
import {
  FiBookmark,
  FiShare2,
  FiEye,
} from "react-icons/fi";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const formatDate = (d) =>
  new Date(d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

const Stars = ({ value = 0 }) => {
  const stars = [];
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.25 && value - full < 0.75;
  const empty = 5 - full - (hasHalf ? 1 : Math.round(value) - full);
  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f${i}`} className="h-5 w-5" />);
  if (hasHalf) stars.push(<FaStarHalfAlt key="half" className="h-5 w-5" />);
  for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`e${i}`} className="h-5 w-5" />);
  return <div className="flex items-center gap-1 text-yellow-500">{stars}</div>;
};

const Tag = ({ children }) => (
  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-200">
    {children}
  </span>
);

export default function NewsCard({ singleNews }) {
  const {
    title,
    image_url,
    thumbnail_url,
    details,
    rating,
    total_view,
    author,
    others_info,
    _id
  } = singleNews;

  // Fake tags from the details line like in your screenshot.
  const metaText = "Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States";
  const tags = metaText.split(",").slice(0, 6).map((t) => t.trim());

  return (
    <article className="relative overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:ring-8 hover:ring-purple-200">
      {/* Featured Image Section */}
      <div className="relative">
        <img
          src={image_url || thumbnail_url}
          alt={title}
          className="h-64 w-full object-cover rounded-t-3xl"
          loading="lazy"
        />
        {/* Colorful Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-t-3xl"></div>
        {/* Trending Badge */}
        {others_info?.is_trending && (
          <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg transform -rotate-3 transition duration-300 hover:scale-110 hover:rotate-0">
            🔥 Trending
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        {/* Author & Actions Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={author?.img}
              alt={author?.name}
              className="h-12 w-12 rounded-full object-cover border-2 border-indigo-500 ring-4 ring-pink-500/20"
            />
            <div>
              <p className="text-sm font-bold text-gray-900">{author?.name}</p>
              <p className="text-xs text-gray-500">{formatDate(author?.published_date || Date.now())}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-gray-500 rounded-full p-2 bg-gray-100 hover:text-purple-600 hover:bg-purple-50 transition-colors" aria-label="Bookmark">
              <FiBookmark className="h-5 w-5" />
            </button>
            <button className="text-gray-500 rounded-full p-2 bg-gray-100 hover:text-purple-600 hover:bg-purple-50 transition-colors" aria-label="Share">
              <FiShare2 className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Title and Details */}
        <div className="space-y-3">
          <Link to={`/news/${_id}`}>
            <h2 className="text-3xl font-extrabold leading-snug text-gray-900 transition-colors hover:text-purple-600">
              {title}
            </h2>
          </Link>
          <p className="text-sm text-gray-700 leading-relaxed">
            {details?.slice(0, 150)}
            {details && details.length > 150 ? "…" : ""}
          </p>
        </div>

        {/* Tag Cloud */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {/* Footer with Rating & Views */}
        <footer className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
          <div className="flex items-center gap-2">
            <Stars value={rating?.number ?? 0} />
            <span className="text-sm font-bold text-gray-800">
              {(rating?.number ?? 0).toFixed(1)}
            </span>
            {rating?.badge && (
              <span className="ml-1 rounded-md bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                {rating.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FiEye className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-semibold text-gray-800">{total_view}</span>
          </div>
        </footer>
      </div>
    </article>
  );
}