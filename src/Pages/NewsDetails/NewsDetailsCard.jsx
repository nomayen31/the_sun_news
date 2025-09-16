import React from 'react';

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    image_url,
    thumbnail_url,
    details,
    rating,
    total_view,
    author,
    others_info,
  } = news;

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden md:col-span-9 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 
        <div className="md:col-span-2">

          <div className="relative mb-6">
            <img 
              src={image_url || thumbnail_url} 
              alt={title} 
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />

            <div className="absolute top-4 left-4 flex space-x-2">
              {others_info?.is_todays_pick && (
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold shadow-md transform -rotate-2">
                  ✨ Today's Pick
                </span>
              )}
              {others_info?.is_trending && (
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md transform rotate-2">
                  🔥 Trending
                </span>
              )}
            </div>
          </div>
          

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {title}
          </h2>

          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>{details}</p>
          </div>
        </div>

        <div className="md:col-span-1 bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl p-6 shadow-inner">

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center">
              <img 
                src={author?.img} 
                alt={author?.name} 
                className="w-24 h-24 rounded-full border-4 border-purple-500 object-cover mb-4"
              />
              <span className="text-sm font-semibold text-purple-600 mb-1">Written by</span>
              <h3 className="text-xl font-bold text-gray-900">{author?.name}</h3>
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Article Statistics</h4>
            <div className="space-y-4">
              {rating && (
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl text-yellow-500 mr-3">⭐</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{rating?.number}</span>
                    <span className="text-sm text-gray-500">{rating?.badge} Rating</span>
                  </div>
                </div>
              )}
              {total_view && (
                <div className="flex items-center text-gray-700">
                  <span className="text-2xl text-pink-500 mr-3">❤️</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{total_view}</span>
                    <span className="text-sm text-gray-500">Total Views</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;