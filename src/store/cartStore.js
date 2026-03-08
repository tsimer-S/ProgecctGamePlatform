import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (game) => set((state) => ({ cart: [...state.cart, game] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(g => g.id !== id) })),
}));