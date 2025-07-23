import { FaTimes, FaShoppingBag } from 'react-icons/fa'
import { useCart } from '../context/cartContext'

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    clearCart
  } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${isCartOpen ? '' : 'hidden'}`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium flex items-center">
                  <FaShoppingBag className="mr-2" />
                  Your Cart ({cart.length})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center border-b pb-4">
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600">KSh {item.price}</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded-l"
                        >
                          -
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center border-t border-b">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded-r"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between font-medium text-lg">
                  <span>Subtotal:</span>
                  <span>KSh {subtotal}</span>
                </div>
                <div className="mt-4 space-y-2">
                  <button
                    onClick={clearCart}
                    className="w-full btn-outline"
                  >
                    Clear Cart
                  </button>
                  <button className="w-full btn-primary">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer