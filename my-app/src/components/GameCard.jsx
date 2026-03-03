import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export default function GameCard({ game, index = 0 }) {
  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl bg-[var(--card-bg)] backdrop-blur-md 
        border border-gray-800/60 hover:border-[var(--neon-cyan)]/60
        neon-glow animate-appear
      `}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-[var(--neon-cyan)] transition-colors">
          {game.name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-extrabold text-[var(--neon-cyan)] drop-shadow-md">
            ${game.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400">{game.genre}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => addToCart(game)}
            className="flex-1 btn-neon text-sm"
          >
            В корзину
          </button>

          <Link
            to={`/game/${game.id}`}
            className="flex-1 bg-gray-800/70 hover:bg-gray-700/70 text-center py-2.5 rounded-xl transition-colors border border-gray-600/50"
          >
            Подробнее
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 bg-gradient-to-br from-[var(--neon-cyan)]/10 via-[var(--neon-purple)]/5 to-transparent blur-2xl transition-opacity duration-700" />
    </div>
  )
}