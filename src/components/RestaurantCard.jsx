

import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{restaurant.name}</h2>
        <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
        <p className="text-sm text-yellow-500 mt-1">⭐ {restaurant.rating}</p>
        <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
