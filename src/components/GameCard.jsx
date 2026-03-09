// src/components/GameCard.jsx
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function GameCard({ game }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const formatPrice = (price) => {
    if (price === 0) return "Бесплатно";
    return `${price.toFixed(2)}$`;
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl neon-glow animate-appear">
      <img
        src={game.image}
        alt={game.name || game.title} // Поддержка обоих вариантов
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h3 className="text-lg font-bold text-cyan-400">
        {game.name || game.title} {/* Используем name или title */}
      </h3>

      <p className="text-gray-400 text-sm">
        {game.genre}
      </p>

      <p className="text-pink-400 mt-2">
        {formatPrice(game.price)}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => addToCart(game)}
          className="btn-neon"
        >
          В корзину
        </button>

        <Link
          to={`/game/${game.id}`}
          className="btn-neon"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default GameCard;