import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../api/restaurants'; // Ensure path is correct
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuItemCard from '../components/MenuItemCard';
import CartDrawer from '../components/CartDrawer';

const Restaurant = () => {
  const { id } = useParams();
  const restaurant = getRestaurantById(id);

  if (!restaurant) {
    return <div className="p-4">Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Restaurant header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full md:w-1/3 h-48 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{restaurant.name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-gray-700">
                {restaurant.rating} • {restaurant.deliveryTime} • KSh {restaurant.deliveryFee}
              </span>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <div>
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <div className="space-y-4">
            {restaurant.menu.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Restaurant;