import React from "react";
import swimming from "../../src/assets/swimming.png";
import classroom from "../../src/assets/playground.png";
import playground from "../../src/assets/class.png";

const QZone = () => {
  const activities = [
    { id: 1, title: "Swimming", img: swimming },
    { id: 2, title: "Class", img: classroom },
    { id: 3, title: "Play Ground", img: playground },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border-4 border-dashed border-indigo-400 p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-indigo-500 pb-3 mb-6">
        Q-Zone
      </h2>

      {/* Activity Cards */}
      <div className="flex flex-col gap-6">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`
              relative overflow-hidden rounded-xl shadow-lg 
              transform transition-all duration-500 ease-in-out 
              hover:scale-[1.03] hover:shadow-2xl hover:rotate-1
              ${index === 0 ? 'bg-blue-100' : ''}
              ${index === 1 ? 'bg-yellow-100' : ''}
              ${index === 2 ? 'bg-green-100' : ''}
            `}
          >
            {/* Image with overlay */}
            <div className="relative">
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>

            {/* Title with improved styling */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center text-white text-xl font-bold tracking-wide">
              {activity.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QZone;