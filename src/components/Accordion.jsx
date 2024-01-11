import { useState } from 'react'
import useFiltersStore from '../store/filtersStore'

export function Accordion ({ title, content }) {
  const [accordionOpen, setAccordionOpen] = useState(false)

  const { globalFilters, setGlobalFilters, productsList, setGlobalProducts, globalProducts } = useFiltersStore()

  const handleFilterChange = (item) => {
    if (title === 'Brands') {
      setGlobalFilters({ category: 'all', brand: item })
      const filteredProducts = productsList.filter((product) => product.brand === item)
      setGlobalProducts(filteredProducts)
    }
    if (title === 'Categories') {
      setGlobalFilters({ category: item, brand: 'all' })
      const filteredProducts = productsList.filter((product) => product.category === item)
      setGlobalProducts(filteredProducts)
    }
    if (title === 'Promotions') {
      setGlobalFilters({ category: 'all', brand: 'all' })
      const filteredProducts = productsList.filter((product) => product.discountPercentage >= 30)
      setGlobalProducts(filteredProducts)
    }
    console.log(title)
    console.log('filters', globalFilters)
    console.log('globalProducts', globalProducts)
  }

  return (
    <div className='py-2'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full'
      >
        <span>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className='fill-indigo-500 shrink-0 ml-8'
          width='16'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
        </svg>
      </button>
      <div
        className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'h-[100px] opacity-80'
            : 'h-[0] opacity-0'
        }`}
      >
        <div className='overflow-hidden'>{
          content.map(item => (
            <div
              key={item}
              className='cursor-pointer'
              onClick={() => handleFilterChange(item)}
            >
              {item}
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}
