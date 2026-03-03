import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center py-20 md:py-32">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-purple)] to-[var(--neon-pink)] bg-clip-text text-transparent animate-pulse">
NN Game Store   
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
        Лучшие пиратские игры Покупай, играй.
      </p>
      <Link
        to="/catalog"
        className="inline-block text-xl px-10 py-5 btn-neon rounded-2xl shadow-2xl"
      >
        Открыть каталог
      </Link>
    </div>
  )
}