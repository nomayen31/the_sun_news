import React from "react";
import { FaBookOpen, FaUserFriends, FaFutbol } from "react-icons/fa";

const QZone = () => {
  const activities = [
    {
      id: 1,
      title: "Reading Nook",
      icon: FaBookOpen,
      color: "from-blue-500 to-indigo-600",
      description: "Dive into a world of knowledge and adventure."
    },
    {
      id: 2,
      title: "Community Hub",
      icon: FaUserFriends,
      color: "from-purple-500 to-pink-600",
      description: "Connect with others and share great ideas."
    },
    {
      id: 3,
      title: "Game Field",
      icon: FaFutbol,
      color: "from-green-500 to-teal-600",
      description: "Unleash your potential and play for fun."
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border-4 border-dashed border-indigo-400 p-6">

      <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-indigo-500 pb-3 mb-6">
        Q-Zone
      </h2>

      {/* Activity Cards */}
      <div className="flex flex-col gap-6">
        {activities.map((activity) => {
          const IconComponent = activity.icon;
          return (
            <div
              key={activity.id}
              className={`
                relative overflow-hidden rounded-xl p-6
                bg-gradient-to-br ${activity.color}
                text-white transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl hover:brightness-125
                group
              `}
            >
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <IconComponent className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold">{activity.title}</h3>
              </div>
              <p className="text-sm opacity-90">{activity.description}</p>
              
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-[-20%] right-[-20%] w-36 h-36 rounded-full bg-white/10 blur-xl"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QZone;