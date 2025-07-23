import { FaSearch, FaUser, FaShoppingBag, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-[var(--primary)]">
            Food For
          </Link>
          <div className="hidden md:flex items-center space-x-1 text-gray-600 cursor-pointer">
            <FaMapMarkerAlt />
            <span className="font-medium">Nairobi</span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for restaurants or shops"
              className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-[var(--primary)]">
            <FaUser />
            <span>Log in</span>
          </button>
          <button 
            className="relative p-2 text-gray-600 hover:text-[var(--primary)]"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--primary)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden p-2 text-gray-600">
            <FiMenu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header