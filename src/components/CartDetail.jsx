import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function CartDetail() {
  const { cart, removeFromCart } = useCartStore();

  const formatPrice = (price) => {
    if (price === 0) return "Бесплатно";
    return `${price.toFixed(2)}$`;
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {cart.map((game) => (
        <div
          key={game.id}
          className="bg-gray-900 rounded-xl p-6 neon-glow animate-appear"
        >
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          <h2 className="text-xl font-bold text-cyan-400">
            {game.title}
          </h2>

          <p className="text-gray-400 mt-1">
            Жанр: {game.genre}
          </p>

          <p className="text-pink-400 text-lg mt-2">
            {formatPrice(game.price)}
          </p>

          <div className="flex gap-3 mt-4">
            <Link
              to="/checkout"
              className="btn-neon"
            >
              Купить
            </Link>

            <Link
              to={`/game/${game.id}`}
              className="btn-neon"
            >
              Подробнее
            </Link>

            <button
              onClick={() => removeFromCart(game.id)}
              className="text-red-400 hover:text-red-600"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartDetail;