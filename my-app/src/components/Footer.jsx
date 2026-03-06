export default function Footer() {
  return (
    <footer className="bg-black/70 border-t border-cyan-900/30 py-6 text-center text-gray-400 text-sm">
      <div className="container mx-auto px-4">
        © {new Date().getFullYear()} Game Platform •  магазин игр • Сделано в IUCA
      </div>
    </footer>
  )
}