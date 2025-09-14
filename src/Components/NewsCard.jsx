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
  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f${i}`} className="h-4 w-4" />);
  if (hasHalf) stars.push(<FaStarHalfAlt key="half" className="h-4 w-4" />);
  for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`e${i}`} className="h-4 w-4" />);
  return <div className="flex items-center gap-1 text-yellow-500">{stars}</div>;
};

const Tag = ({ children }) => (
  <span className="rounded-full border px-2 py-0.5 text-xs text-gray-600 border-gray-200">
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
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Top bar */}
      <header className="flex items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{author?.name}</p>
            <p className="text-xs text-gray-500">{formatDate(author?.published_date || Date.now())}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          {others_info?.is_trending && (
            <span className="mr-2 rounded-full bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-600">
              Trending
            </span>
          )}
          <button className="rounded-lg p-2 hover:bg-gray-100" aria-label="Bookmark">
            <FiBookmark className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 hover:bg-gray-100" aria-label="Share">
            <FiShare2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Title */}
      <h2 className="px-4 text-xl font-extrabold leading-snug text-gray-900">
        {title}
      </h2>

      {/* Image */}
      <div className="mt-3">
        <img
          src={image_url || thumbnail_url}
          alt={title}
          className="h-64 w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Meta / tags */}
      <div className="space-y-3 p-4">
        <p className="text-xs text-gray-500">
          {formatDate(author?.published_date || Date.now())} | Tag Cloud
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {/* Details preview */}
        <p className="text-sm text-gray-700">
          {details?.slice(0, 210)}
          {details && details.length > 210 ? "…" : ""}
        </p>

        <Link to={`/news/${singleNews._id}`} className="text-sm font-semibold text-indigo-600 hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-gray-100 p-4">
        <div className="flex items-center gap-2">
          <Stars value={rating?.number ?? 0} />
          <span className="text-sm font-semibold text-gray-800">
            {(rating?.number ?? 0).toFixed(1)}
          </span>
          {rating?.badge && (
            <span className="ml-2 rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
              {rating.badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FiEye className="h-5 w-5" />
          <span className="text-sm">{total_view}</span>
        </div>
      </footer>
    </article>
  );
}

