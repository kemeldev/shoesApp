/* eslint-disable no-undef */
import { create } from 'zustand'

const useCartStore = create((set) => {
  // Try to get cartProducts from local storage, or default to an empty array
  const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []

  return {
    cartProducts: storedCartProducts,
    addCartProduct: (product) => {
      set((state) => {
        const updatedCartProducts = [...state.cartProducts, product]

        // Save the updated cartProducts to local storage
        localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts))

        return { cartProducts: updatedCartProducts }
      })
    },
    removeCartProduct: (productId) => {
      set((state) => {
        const updatedCartProducts = state.cartProducts.filter((product) => product.id !== productId)

        // Save the updated cartProducts to local storage
        localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts))

        return { cartProducts: updatedCartProducts }
      })
    }
  }
})

export default useCartStore
