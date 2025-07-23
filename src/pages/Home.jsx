import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RestaurantCard from '../components/RestaurantCard'
import { getRestaurants } from '../Api/restaurants.js'

// Sample categories data
const categories = [
  { id: 1, name: 'Fast Food', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Cafe', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Bakery', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Local', image: 'https://via.placeholder.com/150' }
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    // Fetch restaurants when component mounts
    getRestaurants().then(data => {
      setRestaurants(data);
      setFilteredRestaurants(data);
    });
  }, []);

  useEffect(() => {
    let results = restaurants
    if (searchTerm) {
      results = results.filter((r) =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    if (selectedCategory) {
      results = results.filter((r) =>
        r.cuisine === selectedCategory
      )
    }
    setFilteredRestaurants(results)
  }, [searchTerm, selectedCategory, restaurants])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          {/* Hero Section */}
          <div className="bg-[var(--primary)] rounded-lg p-8 text-white mb-8">
            <h1 className="text-3xl font-bold mb-4">Anything you need, delivered to your door</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter delivery address"
                className="flex-grow p-3 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button className="bg-[var(--secondary)] px-6 rounded-r-lg font-medium">
                Find
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">What are you craving?</h2>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex flex-col items-center min-w-fit p-3 rounded-lg ${
                    selectedCategory === category.name
                      ? 'bg-[var(--primary)] text-white'
                      : 'bg-white shadow-sm'
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 object-cover rounded-full mb-2"
                  />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Restaurants */}
          <div>
            <h2 className="text-xl font-bold mb-4">Popular restaurants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home