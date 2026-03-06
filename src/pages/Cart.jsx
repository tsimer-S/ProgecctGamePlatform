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