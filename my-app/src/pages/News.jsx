// src/pages/News.jsx
export default function News() {
  const newsItems = [
    { id: 1, title: "Новая акция: -50% на все игры Cyberpunk серии", date: "06.03.2026", text: "Только до 15 марта!" },
    { id: 2, title: "Добавлено 100 новых игр в каталог", date: "05.03.2026", text: "Теперь выбор ещё шире" },
    { id: 3, title: "Запущена система профиля и избранного", date: "04.03.2026", text: "Регистрируйтесь!" },
  ]

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Новости
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {newsItems.map(item => (
          <div key={item.id} className="bg-gray-900/70 p-6 rounded-xl border border-cyan-900/40 neon-glow">
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{item.date}</p>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}