import { Link } from 'react-router-dom'
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
  const { setGlobalFilters, setGlobalProducts } = useFiltersStore()

  const handleFilterChange = () => {
    // Update global filters
    setGlobalFilters({ category, brand: 'all' })

    const filteredProducts = useFiltersStore.getState().productsList.filter(
      (product) => product.category === category
    )

    // Update global products with the filtered array
    setGlobalProducts(filteredProducts)
  }

  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
      <Link to='/products/'>
        <img
          src={isFavoriteImg}
          alt={title}
          className='w-[400px] h-[400px] mx-auto block cursor-pointer object-cover'
          onClick={handleFilterChange}
        />
      </Link>
      <div className='mx-2 flex row  items-center justify-between'>
        <p className='mt-2 font-semibold capitalize text-2xl leading-normal font-roboto'>
          {category}
        </p>

      </div>

    </div>
  )
}

export default FavoriteProductCard
