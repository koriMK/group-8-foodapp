import { useEffect, useState } from 'react';
import { restaurants, categories } from '../api/restaurants'; // Fixed import
import Header from '../components/Header';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import CartDrawer from '../components/CartDrawer';
// Ensure this path is correct
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)

  useEffect(() => {
    let results = restaurants
    if (searchTerm) {
      results = results.filter((r) =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    if (selectedCategory) {
      results = results.filter((r) =>
        r.categories.some((c) => c === selectedCategory)
      )
    }
    setFilteredRestaurants(results)
  }, [searchTerm, selectedCategory])

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
      <CartDrawer />
    </div>
  )
}

export default Home