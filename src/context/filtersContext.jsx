import { createContext, useState, useContext } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [globalFilters, setGlobalFilters] = useState({
    category: 'all',
    brand: 'all',
    discountPercentage: 30
  })

  return (
    <FiltersContext.Provider value={{
      globalFilters,
      setGlobalFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export function useFiltersHook () {
  const { globalFilters, setGlobalFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    // Implement your filtering logic here based on globalFilters
    const filteredProducts = products.filter((product) => {
      // Replace these conditions with your actual filtering criteria
      const categoryFilter = globalFilters.category === 'all' || product.category === globalFilters.category
      const brandFilter = globalFilters.brand === 'all' || product.brand === globalFilters.brand
      const discountFilter = product.discountPercentage >= globalFilters.discountPercentage

      return categoryFilter && brandFilter && discountFilter
    })

    return filteredProducts
  }
  return { globalFilters, filterProducts, setGlobalFilters }

  // const filterProducts = (products) => {
  //   return products.filter(product => {
  //     return (
  //       product.price >= globalFilters.minPrice &&
  //       (
  //         globalFilters.category === 'all' ||
  //         product.category === globalFilters.category
  //       )
  //     )
  //   })
  // }
}
