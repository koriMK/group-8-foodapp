// src/api/restaurants.js

export const getRestaurants = async () => {
  return [
    {
      id: 1,
      name: "Java House",
      cuisine: "Cafe",
      image: "https://glovoapp.com/images/placeholder-java.jpg",
      rating: 4.4,
    },
    {
      id: 2,
      name: "Artcaffe",
      cuisine: "Bakery & Coffee",
      image: "https://glovoapp.com/images/placeholder-artcaffe.jpg",
      rating: 4.6,
    },
    {
      id: 3,
      name: "KFC Kenya",
      cuisine: "Fast Food",
      image: "https://glovoapp.com/images/placeholder-kfc.jpg",
      rating: 4.1,
    },
  ];
};
