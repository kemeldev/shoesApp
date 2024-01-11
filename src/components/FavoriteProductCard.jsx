import { Link } from 'react-router-dom'
import { useRef } from 'react'
// import { useFiltersHook } from '../context/filtersContext'
// This is using Context from react
// const { setGlobalFilters } = useFiltersHook()
// const handleImageClick = () => {
//   // Assuming 'brand' is the property you want to update in the globalFilters state
//   setGlobalFilters((prevFilters) => ({
//     ...prevFilters,
//     category,
//     brand: 'all'
//   }))
// }
import useFiltersStore from '../store/filtersStore'

const FavoriteProductCard = ({ isFavoriteImg, title, category }) => {
  const { globalFilters, setGlobalFilters, globalProducts, setGlobalProducts } = useFiltersStore()
  const refContainer = useRef(globalProducts)

  const handleFilterChange = () => {
    // Update global filters
    setGlobalFilters({ category, brand: 'all' })

    // Filter products based on the new filters
    // aca esta el error, filtra los productos del global products, y la segunda vez solo contiene los filtrados entonces no devuelve mas que un array vacio
    const filteredProducts = refContainer.current.filter(
      (product) => product.category === category
    )

    // Update global products with the filtered array
    setGlobalProducts(filteredProducts)
  }

  console.log('global filters home', globalFilters)
  console.log('global products home', globalProducts)
  // console.log('global products', globalProducts)

  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
      {/* <Link to='/products/'> */}
      <img
        src={isFavoriteImg}
        alt={title}
        className='w-[400px] h-[400px] mx-auto block cursor-pointer object-cover'
        onClick={handleFilterChange}
      />
      {/* </Link> */}
      <div className='mx-2 flex row  items-center justify-between'>
        <p className='mt-2 font-semibold capitalize text-2xl leading-normal font-roboto'>
          {category}
        </p>

      </div>

    </div>
  )
}

export default FavoriteProductCard
