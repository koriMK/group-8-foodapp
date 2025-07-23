import { useCart } from '../context/cartContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Checkout = () => {
  const { cart, subtotal, clearCart } = useCart()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Address</label>
                    <textarea
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      rows="3"
                      placeholder="Delivery address"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Delivery Instructions</label>
                    <textarea
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                      rows="2"
                      placeholder="Any special instructions?"
                    ></textarea>
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="text-[var(--primary)]" />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="text-[var(--primary)]" />
                    <span>M-Pesa</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="text-[var(--primary)]" />
                    <span>Credit/Debit Card</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>KSh {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>KSh {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>KSh 150</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>KSh {subtotal + 150}</span>
                  </div>
                </div>
                <button
                  className="w-full mt-6 btn-primary py-3"
                  onClick={() => {
                    alert('Order placed successfully!')
                    clearCart()
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout