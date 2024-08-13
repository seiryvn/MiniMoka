import { create } from 'zustand'

export const useCart = create((set) => ({
  numOfItems: 0,

  addToCart: () => set((state) => ({ 
    numOfItems: state.numOfItems + 1,
  })),

  removeFromCart: () => set((state) => ({
    numOfItems: state.numOfItems - 1,
  })),

  removeAll: () => set({
    numOfItems: 0, 
  }),

}))