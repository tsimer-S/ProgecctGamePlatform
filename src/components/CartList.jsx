import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function CartList() {
  const { cart, removeFromCart } = useCartStore();

  const formatPrice = (price) => {
    if (price === 0) return "Бесплатно";
    return `${price.toFixed(2)}$`;
  };

  return (
    <div className="space-y-4">
      {cart.map((game) => (
        <div
          key={game.id}
          className="flex justify-between items-center p-4 rounded-xl bg-gray-900 neon-glow"
        >
          <div>
            <h3 className="text-lg font-bold text-cyan-400">
              {game.title}
            </h3>

            <p className="text-sm text-gray-400">
              {formatPrice(game.price)}
            </p>
          </div>

          <div className="flex gap-3 items-center">
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

export default CartList;