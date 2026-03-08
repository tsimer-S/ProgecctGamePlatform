import { create } from "zustand";

const getStoredUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const useAuthStore = create((set) => ({
  user: getStoredUser(),
  isLoggedIn: !!getStoredUser(),

  register: ({ username, email, password }) => {
    const userData = {
      username,
      email,
      password,
      joined: new Date().toLocaleDateString()
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));
    localStorage.setItem("user", JSON.stringify(userData));

    set({
      user: userData,
      isLoggedIn: true
    });
  },

  login: ({ email, password }) => {
    const stored = JSON.parse(localStorage.getItem("registeredUser"));

    if (!stored) {
      alert("Пользователь не найден");
      return false;
    }

    if (stored.email === email && stored.password === password) {
      localStorage.setItem("user", JSON.stringify(stored));

      set({
        user: stored,
        isLoggedIn: true
      });

      return true;
    }

    alert("Неверный email или пароль");
    return false;
  },

  logout: () => {
    localStorage.removeItem("user");

    set({
      user: null,
      isLoggedIn: false
    });
  }
}));