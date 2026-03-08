// src/pages/Promotions.jsx
export default function Promotions() {
  const promotions = [
    { id: 1, title: "Весенний разогрев", discount: "-50%", games: "Cyberpunk 2077, Elden Ring", until: "15 марта" },
    { id: 2, title: "Новичкам скидка", discount: "-30%", games: "На первую покупку", until: "31 марта" },
    { id: 3, title: "Ночь скидок", discount: "-70%", games: "Выбранные инди-игры", until: "12 марта" },
  ]

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Акции и скидки
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {promotions.map(promo => (
          <div key={promo.id} className="bg-gradient-to-br from-gray-900 to-black/80 p-8 rounded-2xl border border-purple-900/40 neon-glow text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">{promo.discount}</h2>
            <h3 className="text-xl font-semibold mb-3">{promo.title}</h3>
            <p className="text-gray-300 mb-4">{promo.games}</p>
            <p className="text-sm text-gray-500">До {promo.until}</p>
          </div>
        ))}
      </div>
    </div>
  )
}