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
    <div className="w-full bg-white rounded-xl shadow-md border border-gray-200 p-5">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">
        Q-Zone
      </h2>

      {/* Activity Cards */}
      <div className="flex flex-col gap-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src={activity.img}
              alt={activity.title}
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <p className="text-center py-3 text-gray-700 font-medium">
              {activity.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QZone;
