import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import CartList from "../components/CartList";
import CartDetail from "../components/CartDetail";

function Cart() {
  const { cart } = useCartStore();
  const [view, setView] = useState("list");

  const rawTotal = cart.reduce((sum, game) => sum + game.price, 0);

  // кастомное округление: 0-5 вниз, 6-9 вверх
  const customRound = (num) => {
    const scaled = num * 100;
    const integer = Math.floor(scaled);
    const decimal = scaled - integer;

    const lastDigit = Math.floor(decimal * 10);

    if (lastDigit <= 5) {
      return (integer / 100).toFixed(2);
    }

    return ((integer + 1) / 100).toFixed(2);
  };

  const total = customRound(rawTotal);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 neon-glow">
        Корзина
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("list")}
          className={`btn-neon ${view === "list" ? "opacity-100" : "opacity-50"}`}
        >
          List
        </button>

        <button
          onClick={() => setView("detail")}
          className={`btn-neon ${view === "detail" ? "opacity-100" : "opacity-50"}`}
        >
          Detail
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-400">Корзина пуста</p>
      ) : (
        <>
          {view === "list" ? <CartList /> : <CartDetail />}

          <div className="mt-8 text-xl text-pink-400 neon-glow">
            Общая сумма: {total}$
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;