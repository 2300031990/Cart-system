import { useCart } from '../context/CartContext'
import Button from '../components/Button'

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Add this for debugging
  console.log('Cart page items:', cartItems)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
          <Button onClick={() => window.location.href = '/items'}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="flex items-center gap-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-32 h-32 object-cover rounded-md"
                  />
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          className="border rounded-md px-2 py-1"
                        >
                          {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                        <span className="text-xl font-semibold text-blue-600">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                      <Button 
                        variant="danger" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-4">
                  <span className="text-xl font-semibold">Total</span>
                  <span className="text-xl font-bold text-blue-600">₹{total}</span>
                </div>
                <Button className="w-full">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 