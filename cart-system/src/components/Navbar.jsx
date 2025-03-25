import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cartItems } = useCart()
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            MyShop
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/items" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Shop
            </Link>
            <Link to="/cart" className="relative group">
              <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Cart
              </span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 