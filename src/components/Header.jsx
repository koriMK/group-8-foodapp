import { FaSearch, FaUser, FaShoppingBag, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <Link to="/" className="logo">Food For</Link>
          <div className="location-selector">
            <FaMapMarkerAlt />
            <span>Nairobi</span>
          </div>
        </div>
        
        <div className="header-center">
          <div className="search-bar">
            <input type="text" placeholder="Search for restaurants or shops" />
            <FaSearch className="search-icon" />
          </div>
        </div>
        
        <div className="header-right">
          <button className="btn-login">
            <FaUser className="user-icon" />
            <span>Log in</span>
          </button>
          <button className="btn-cart" onClick={() => setIsCartOpen(true)}>
            <FaShoppingBag className="cart-icon" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
          <button className="btn-menu">
            <FiMenu className="menu-icon" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;