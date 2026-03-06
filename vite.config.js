// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← этот импорт обязателен!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← добавь плагин сюда
  ],
})