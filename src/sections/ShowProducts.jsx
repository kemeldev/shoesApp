import { useState } from 'react'
import { Catalog } from './Catalog'
import { Filters } from './Filters'
import { products as productsList } from '../products/productsList.json'

export function ShowProducts () {
  const [filters, setFilters] = useState(false)
  const [productsCatalog, setProductsCatalog] = useState(productsList)

  const handleFilters = (e) => {
    e.preventDefault()
    setFilters(prevState => !prevState)
  }

  return (
    <>
      <header className='mx-8 flex flex-row justify-between'>
        <div className='flex flex-col'>
          <h3>Now Showing "Category"</h3>
          <h1>Football Shoes</h1>
        </div>
        <div className='flex gap-3'>
          <button onClick={handleFilters}>Filters Button</button>
          <button>Sort By Button</button>
        </div>
      </header>
      <section className='flex flex-row transition-all duration-500'>
        {filters && <Filters isActive={filters} />}

        <Catalog products={productsCatalog} />
      </section>

    </>
  )
}
