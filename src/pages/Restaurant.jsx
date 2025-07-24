import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../api/restaurants';  
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuItemCard from '../components/MenuItemCard';
import CartDrawer from '../components/CartDrawer';

const Restaurant = () => {
  const { id } = useParams();
  const restaurant = getRestaurantById(id); 

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* ... rest of your component ... */}
    </div>
  );
};

export default Restaurant;