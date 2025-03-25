import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-16">
      <div className="text-center px-6 md:px-0 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
          Welcome to <span className="text-blue-600">MyShop</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Discover our curated collection of premium products at unbeatable prices. 
          Quality meets affordability.
        </p>
        <Button 
          onClick={() => navigate('/items')}
          variant="primary"
          className="text-lg px-8 py-3"
        >
          Start Shopping
        </Button>
      </div>
    </div>
  )
} 