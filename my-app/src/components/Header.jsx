import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCartStore } from '../store/cartStore'

export default function Header() {
  const cart = useCartStore(state => state.cart)
  const totalItems = cart.length

  return (
    <header className="bg-black/50 backdrop-blur-md border-b border-cyan-900/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] bg-clip-text text-transparent">
          Game Platform
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link to="/" className="hover:text-[var(--neon-cyan)] transition-colors">Главная</Link>
          <Link to="/catalog" className="hover:text-[var(--neon-cyan)] transition-colors">Каталог</Link>
          <Link to="/cart" className="relative flex items-center gap-2 hover:text-[var(--neon-cyan)] transition-colors">
            <FaShoppingCart className="text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--neon-purple)] text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}