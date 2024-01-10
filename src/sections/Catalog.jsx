import { PopularProductCard } from '../components'

export function Catalog ({ products }) {
  return (
    <>
      <section id='products' className='max-container max-sm:mt-12 mx-8 uppercase font-roboto font-black'>

        <div className=' grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6'>
          {products.map((product) => (
            <PopularProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  )
}
