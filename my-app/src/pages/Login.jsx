// src/pages/Login.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика авторизации (Firebase, Supabase и т.д.)
    console.log('Вход:', email, password)
  }

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-cyan-400">Вход</h1>
      
      <form onSubmit={handleSubmit} className="bg-gray-900/70 p-8 rounded-2xl border border-cyan-900/40 neon-glow space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Пароль</label>
          <input 
            type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            required
          />
        </div>

        <button type="submit" className="w-full btn-neon py-3 text-lg">
          Войти
        </button>

        <p className="text-center text-gray-400 mt-4">
          Нет аккаунта? <Link to="/register" className="text-cyan-400 hover:underline">Зарегистрироваться</Link>
        </p>
      </form>
    </div>
  )
}