import { products as productsList } from '../products/productsList.json'
import { FavoriteProductCard } from '../components'

const Favorites = () => {
  const favorites = productsList.filter((favorite) => favorite.isFavorite)

  return (
    <section id='products' className='max-container max-sm:mt-12 mx-8 uppercase font-roboto font-black'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-[34px] font-palanquin font-bold mb-6'>
          Be  <span className='text-blue-900'> Part </span> of
        </h2>

      </div>

      <div className=' grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6'>
        {favorites.map((product) => (
          <FavoriteProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Favorites
