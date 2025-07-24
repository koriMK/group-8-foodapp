import { useCart } from '../context/cartContext';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    subtotal,
    clearCart 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div>
      <div onClick={() => setIsCartOpen(false)}></div>
      
      <div>
        <div>

          <div>
            <h2>Your Cart</h2>
            <button onClick={() => setIsCartOpen(false)}>
              <FaTimes />
            </button>
          </div>
          
          <div>
            {cart.length === 0 ? (
              <div>
                Your cart is empty
              </div>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <div>
                      <p>{item.name}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <FaMinus />
                      </button>
                      
                      <span>{item.quantity}</span>
                      
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <FaPlus />
                      </button>
                      
                      <button onClick={() => removeFromCart(item.id)}>
                        <FaTimes />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer */}
          <div>
            <div>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={() => alert('Checkout functionality would go here')}
              disabled={cart.length === 0}
            >
              Checkout
            </button>
            
            {cart.length > 0 && (
              <button onClick={clearCart}>
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
