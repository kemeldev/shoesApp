import { createContext, useState, useContext } from 'react'
import { products as productsList } from '../products/productsList.json'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [globalProducts] = useState(productsList)
  const [globalFilters, setGlobalFilters] = useState({
    category: 'all',
    brand: 'all',
    discountPercentage: 30
  })

  return (
    <FiltersContext.Provider value={{
      globalFilters,
      setGlobalFilters,
      globalProducts
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
      return product.category === globalFilters.category
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
