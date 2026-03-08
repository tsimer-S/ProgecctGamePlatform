export default function GameDetails() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] bg-clip-text text-transparent">
        Детали игры
      </h1>

      <div className="bg-[var(--card-bg)] backdrop-blur-md rounded-2xl border border-cyan-900/40 p-8 neon-glow">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img 
              src="https://via.placeholder.com/600x400/111122/Game+Image" 
              alt="Game" 
              className="w-full rounded-xl shadow-2xl" 
            />
          </div>

          <div>
            <p className="text-3xl font-bold text-[var(--neon-cyan)] mb-4">$49.99</p>
            <p className="text-lg text-gray-300 mb-6">
              Здесь будет полное описание игры, системные требования, скриншоты, видео и отзывы.
            </p>
            <button className="w-full btn-neon py-4 text-xl rounded-xl">
              Купить сейчас
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}