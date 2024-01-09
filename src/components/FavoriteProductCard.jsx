const FavoriteProductCard = ({ isFavoriteImg, title, price, category, rating }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
      <img src={isFavoriteImg} alt={title} className='w-[400px] h-[400px] mx-auto block cursor-pointer object-cover' />
      <div className='mx-2 flex row  items-center justify-between'>
        <p className='mt-2 font-semibold capitalize text-2xl leading-normal font-roboto'>
          {category}
        </p>

      </div>

    </div>
  )
}

export default FavoriteProductCard
