import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Простая шапка */}
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Game Platform</h1>
          <nav className="mt-2">
            <a href="/" className="mr-4 hover:underline">Главная</a>
            <a href="/catalog" className="hover:underline">Каталог</a>
          </nav>
        </header>

        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            {/* Добавь позже: <Route path="/game/:id" element={<GameDetails />} /> */}
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          © 2026 Game Platform
        </footer>
      </div>
    </Router>
  );
}

export default App;