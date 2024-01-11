import { create } from 'zustand'
import { products as productsList } from '../products/productsList.json'

const useFiltersStore = create((set) => ({
  globalFilters: {
    category: 'all',
    brand: 'all',
    discountPercentage: 30
  },
  globalProducts: productsList,
  setGlobalFilters: (newFilters) => set((state) => ({ globalFilters: { ...state.globalFilters, ...newFilters } })),
  setGlobalProducts: (newProducts) => set({ globalProducts: newProducts })
}))

export default useFiltersStore
