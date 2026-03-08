// src/pages/Profile.jsx
import { useState } from 'react'

export default function Profile() {
  const [user, setUser] = useState({
    username: "ErKish",
    email: "erkish@example.com",
    avatar: "https://via.placeholder.com/120?text=ErKish",
    joined: "Март 2026"
  })

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Профиль
      </h1>

      <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl border border-cyan-900/40 p-8 neon-glow">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img 
            src={user.avatar} 
            alt="Avatar" 
            className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-xl" 
          />
          <div>
            <h2 className="text-3xl font-bold text-cyan-300">{user.username}</h2>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-sm text-gray-500 mt-2">На сайте с {user.joined}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Мои покупки</h3>
            <p className="text-gray-300">Пока нет купленных игр</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Избранное</h3>
            <p className="text-gray-300">Добавьте игры в избранное</p>
          </div>
        </div>

        <button className="mt-8 w-full btn-neon py-4 text-lg">
          Выйти из аккаунта
        </button>
      </div>
    </div>
  )
}