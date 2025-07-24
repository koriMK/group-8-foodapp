// src/components/RestaurantCard.jsx

import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img
        src={restaurant.image}
        alt={restaurant.name}
      />
      <div className="restaurant-card-content">
        <h2>{restaurant.name}</h2>
        <p className="cuisine">{restaurant.cuisine}</p>
        <p className="rating">⭐ {restaurant.rating}</p>
        <button>
          View Menu
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
