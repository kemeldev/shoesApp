import { Nav } from './components/Nav'
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections'

function App () {
  return (
    <main className='relative'>
      <Nav />
      <hr className='border-t-2 border-black my-2 mx-8' />
      <section className='container mx-auto border border-red-500'>
        <Hero />
      </section>
      <section className='container mx-auto border py-12 border-yellow-500'>
        <PopularProducts />
      </section>
      <section className='container mx-auto border py-12 border-cyan-500'>
        <SuperQuality />
      </section>
      <section className='container mx-auto border py-12 border-red-500'>
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

export default App
