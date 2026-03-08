// src/pages/Home.jsx
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center py-16 md:py-32 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent animate-pulse">
        Game Platform
      </h1>
      
      <p className="text-xl md:text-2xl mb-12 text-gray-300">
        Лучшие игры в неоновом стиле. Покупай, играй, светись.
      </p>

      {/* Все кнопки в столбик */}
      <div className="flex flex-col items-center gap-5 md:gap-6 w-full max-w-md mx-auto">
        <Link
          to="/catalog"
          className="w-full inline-flex items-center justify-center text-xl font-semibold px-10 py-5 btn-neon rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
        >
          Открыть каталог
        </Link>

        <Link
          to="/news"
          className="w-full inline-flex items-center justify-center text-xl font-semibold px-10 py-5 btn-neon rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
        >
          Новости
        </Link>

        <Link
          to="/promotions"
          className="w-full inline-flex items-center justify-center text-xl font-semibold px-10 py-5 btn-neon rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
        >
          Акции
        </Link>

        <Link
          to="/case"
          className="w-full inline-flex items-center justify-center text-xl font-semibold px-10 py-5 btn-neon rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]"
        >
          Открыть кейс
        </Link>
      </div>

      <p className="mt-12 text-lg text-gray-400">
        Выбери раздел и погрузись в неоновый мир игр
      </p>
    </div>
  )
}