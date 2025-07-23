// src/api/restaurants.js
export const restaurants = [
  {
    id: 1,
    name: 'Burger King',
    image: 'https://via.placeholder.com/300x200?text=Burger+King',
    rating: 4.5,
    deliveryTime: '20-30 min',
    deliveryFee: 150,
    categories: ['Burgers', 'Fast Food'],
    menu: [
      {
        id: 101,
        name: 'Whopper',
        description: 'Flame-grilled beef patty with juicy tomatoes, fresh lettuce',
        price: 850,
        image: 'https://via.placeholder.com/150?text=Whopper'
      }
    ]
  }
  // Add more restaurants as needed
];

// Add this categories export
export const categories = [
  { id: 1, name: 'Fast Food', image: 'https://via.placeholder.com/100?text=Fast+Food' },
  { id: 2, name: 'Pizza', image: 'https://via.placeholder.com/100?text=Pizza' },
  { id: 3, name: 'Asian', image: 'https://via.placeholder.com/100?text=Asian' },
  { id: 4, name: 'Desserts', image: 'https://via.placeholder.com/100?text=Desserts' }
];

// Keep the restaurant finder function
export const getRestaurantById = (id) => {
  return restaurants.find(restaurant => restaurant.id === parseInt(id));
};