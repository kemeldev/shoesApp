import { star } from '../assets/icons'
import { Link } from 'react-router-dom'

const PopularProductCard = ({ thumbnail, title, price, brand, rating, id }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Link
        to={`/products/${id}`}
        // state={{ dataToRender }}
      >
        <img src={thumbnail} alt={title} className='w-[350px] h-[350px] mx-auto block cursor-pointer' />

      </Link>
      <div className='mx-2 flex row  items-center justify-around'>
        <p className='mt-2 font-semibold capitalize text-2xl leading-normal font-roboto'>
          {brand}
        </p>
        <div className='mt-2 flex justify-start gap-2.5 '>
          <img src={star} alt='rating icon' width={24} height={24} />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>
            {rating}
          </p>
        </div>

      </div>

      <h3 className='ml-14 mt-2 text-2xl leading-normal font-semibold  capitalize font-roboto '>
        {title}
      </h3>
      <p className='ml-14 mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price} $
      </p>
    </div>
  )
}

export default PopularProductCard
