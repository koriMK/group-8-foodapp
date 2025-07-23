// src/pages/Restaurant.jsx

import React, { useEffect, useState } from "react";
import { getRestaurants } from "../Api/restaurants";
import RestaurantCard from "../components/RestaurantCard";
import "../index.css"; // make sure your CSS is applied

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants().then(setRestaurants);
  }, []);

  return (
    <div className="restaurant-page">
      <h1 className="restaurant-title">Top Picks in Nairobi</h1>
      <div className="restaurant-grid">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
