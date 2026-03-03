import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import GameDetails from './pages/GameDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[var(--dark-bg)]">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}