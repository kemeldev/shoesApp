import { Link } from 'react-router-dom'
import { useFiltersHook } from '../context/filtersContext'

const FavoriteProductCard = ({ isFavoriteImg, title, price, category, rating }) => {
  const { setGlobalFilters } = useFiltersHook()

  const handleImageClick = () => {
    // Assuming 'brand' is the property you want to update in the globalFilters state
    setGlobalFilters((prevFilters) => ({
      ...prevFilters,
      category,
      brand: 'all'
    }))
  }

  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
      <Link to='/products/'>
        <img
          src={isFavoriteImg}
          alt={title}
          className='w-[400px] h-[400px] mx-auto block cursor-pointer object-cover'
          onClick={handleImageClick}
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
