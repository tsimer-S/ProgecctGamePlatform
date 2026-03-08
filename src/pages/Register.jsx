import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function Register() {
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    register({
      username,
      email,
      password
    });

    navigate("/profile");
  };

  return (
    <div className="p-8 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl neon-glow w-96"
      >
        <h1 className="text-2xl text-cyan-400 mb-6">
          Регистрация
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 bg-black text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 bg-black text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 bg-black text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-neon w-full">
          Создать аккаунт
        </button>
      </form>
    </div>
  );
}

export default Register;