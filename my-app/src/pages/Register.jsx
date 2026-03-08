// src/pages/Register.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика регистрации
    console.log('Регистрация:', username, email, password)
  }

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-400">Регистрация</h1>
      
      <form onSubmit={handleSubmit} className="bg-gray-900/70 p-8 rounded-2xl border border-purple-900/40 neon-glow space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Имя пользователя</label>
          <input 
            type="text" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Пароль</label>
          <input 
            type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        <button type="submit" className="w-full btn-neon py-3 text-lg">
          Зарегистрироваться
        </button>

        <p className="text-center text-gray-400 mt-4">
          Уже есть аккаунт? <Link to="/login" className="text-purple-400 hover:underline">Войти</Link>
        </p>
      </form>
    </div>
  )
}