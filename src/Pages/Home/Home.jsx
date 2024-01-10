import { Nav } from '../../components/Nav'
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, Discover, Brands, Favorites } from '../../sections'

function Home () {
  return (
    <main className='relative'>
      <Nav />
      <hr className='border-t-2 border-black my-2 mx-8' />
      <section className='container mx-auto '>
        <Hero />
      </section>
      <section className='container mx-auto  py-12 '>
        <Favorites />
      </section>
      <section className='container mx-auto py-12'>
        <Discover />
      </section>
      <section className='container mx-auto py-12'>
        <PopularProducts />
      </section>
      <section className='container mx-auto py-12'>
        <Brands />
      </section>
      <section className='container mx-auto  py-12 '>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default Home
