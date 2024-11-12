import { create } from "zustand";

export const useCart = create((set) => ({
    numOfItems: 0,
    cartItems: [],
    totalPrice: 0,
    addToCart: (item) => set((state) => ({
        numOfItems: state.numOfItems + 1,
        cartItems: [...state.cartItems, item],
        totalPrice: state.totalPrice + item.price,
    })),
    removeFromCart: (item) => set((state) => ({
        numOfItems: state.numOfItems - 1,
        cartItems: state.cartItems.filter((i) => i !== item),
        totalPrice: state.totalPrice - item.price,
    })),
    reset: () => set({ numOfItems: 0, cartItems: [], totalPrice: 0 }),
}));