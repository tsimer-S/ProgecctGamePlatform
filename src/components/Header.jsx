import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";

function Header() {
  const { isLoggedIn, user, logout } = useAuthStore();

  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.length;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-black neon-glow">
      <Link
        to="/"
        className="text-2xl font-bold text-pink-400"
      >
        Игровая платформа
      </Link>

      <nav className="flex gap-6 items-center">
        <Link to="/catalog">Каталог</Link>
        <Link to="/news">Новости</Link>
        <Link to="/promotions">Акции</Link>

        <Link to="/cart">
          Корзина ({cartCount})
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/profile"
              className="text-cyan-400"
            >
              {user.username}
            </Link>

            <button
              onClick={logout}
              className="text-red-400"
            >
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;