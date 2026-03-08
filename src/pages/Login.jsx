import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login({ email, password });

    if (success) {
      navigate("/profile");
    }
  };

  return (
    <div className="p-8 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl neon-glow w-96"
      >
        <h1 className="text-2xl text-cyan-400 mb-6">Вход</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 bg-black text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          className="w-full mb-4 p-2 bg-black text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-neon w-full">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;