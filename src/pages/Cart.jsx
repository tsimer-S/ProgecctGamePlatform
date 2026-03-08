<<<<<<< HEAD
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
=======
import { useCartStore } from '../store/cartStore'

export default function Cart() {
  const { cart, removeFromCart } = useCartStore()
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] bg-clip-text text-transparent">
        Корзина
      </h2>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400">Ваша корзина пуста</p>
          <p className="mt-4 text-lg">Добавьте игры из каталога!</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-gray-900/60 p-6 rounded-xl border border-cyan-900/40 neon-glow">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-[var(--neon-cyan)] font-bold">${item.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-300 transition-colors text-lg"
              >
                Удалить
              </button>
            </div>
          ))}

          <div className="text-right text-3xl font-bold text-[var(--neon-cyan)] mt-8">
            Итого: ${total.toFixed(2)}
          </div>

          <button className="w-full btn-neon py-5 text-xl rounded-xl mt-6">
            Перейти к оплате
          </button>
        </div>
      )}
    </div>
  )
}
>>>>>>> 96c44450a9af593800f898cb89c98faa9263a133
