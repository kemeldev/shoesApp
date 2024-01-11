import { useState, useEffect } from 'react'
import { Catalog } from './Catalog'
import { Filters } from './Filters'
import useFiltersStore from '../store/filtersStore'

export function ShowProducts () {
  const { globalProducts, globalFilters } = useFiltersStore()
  const [filters, setFilters] = useState(false)
  const [sort, setSort] = useState(false)
  const [productsCatalog, setProductsCatalog] = useState(globalProducts)

  // const initialCatalog = useRef(productsList)

  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setProductsCatalog(globalProducts)
  }, [globalProducts])

  const handleSort = (e) => {
    e.preventDefault()
    setSort(prevState => !prevState)
  }

  const handleFilters = (e) => {
    e.preventDefault()
    setFilters(prevState => !prevState)
  }

  const handleNameSort = () => {
    const newCatalog = [...productsCatalog]
    newCatalog.sort((a, b) => a.title.localeCompare(b.title))
    setProductsCatalog(newCatalog)
    setSort(prevState => !prevState)
  }

  const handleMaxPriceSort = () => {
    const newCatalog = [...productsCatalog]
    newCatalog.sort((a, b) => b.price - a.price)
    setProductsCatalog(newCatalog)
    setSort(prevState => !prevState)
  }

  const handleMinPriceSort = () => {
    const newCatalog = [...productsCatalog]
    newCatalog.sort((a, b) => a.price - b.price)
    setProductsCatalog(newCatalog)
    setSort(prevState => !prevState)
  }

  const handleRankedSort = () => {
    const newCatalog = [...productsCatalog]
    newCatalog.sort((a, b) => b.rating - a.rating)
    setProductsCatalog(newCatalog)
    setSort(prevState => !prevState)
  }

  const nowShowing = () => {
    if (globalFilters.category === 'all') return 'ALL PRODUCTS'
    else if (globalFilters.category === 'tennis') return 'TENNIS SHOES'
    else if (globalFilters.category === 'outdoor') return 'OUTDOOR SHOES'
    else if (globalFilters.category === 'football') return 'FOOTBALL SHOES'
    else if (globalFilters.category === 'training') return 'TRAINING SHOES'
    else return 'RUNNING SHOES'
  }

  return (
    <>
      <header className='mx-8 flex flex-row justify-between'>
        <div className='flex flex-col'>
          <h3>Now Showing {nowShowing()}</h3>
          <h1>Brand {globalFilters.brand === 'all' ? 'All' : globalFilters.brand}</h1>
        </div>
        <div className='flex gap-3'>
          <div>
            <button onClick={handleFilters}>Filters Button</button>
          </div>
          <div>
            <button onClick={handleSort}>Sort By Button</button>
            <div className={`${sort ? 'h-32' : 'h-0'} w-28 bg-red-200 transition-all ease-in-out duration-500 overflow-hidden`}>
              <div className='cursor-pointer flex flex-col ml-4  gap-1'>
                <p onClick={handleNameSort}>A - Z</p>
                <p onClick={handleMaxPriceSort}>Max Price</p>
                <p onClick={handleMinPriceSort}>Min Price</p>
                <p onClick={handleRankedSort}>Ranked - votes </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='flex flex-row transition-all duration-500'>
        <Filters isActive={filters} />

        <Catalog products={productsCatalog} />

      </section>

    </>
  )
}
