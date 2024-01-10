import { Nav } from '../../components/Nav'
import { Footer } from '../../sections'
import { Ribbon } from '../../sections/Ribbon'
import { ShowProducts } from '../../sections/ShowProducts'

function Details () {
  return (
    <main className='relative'>
      <Nav />
      <hr className='border-t-2 border-black my-2 mx-8' />
      <Ribbon />
      <hr className='border-t-2 border-black my-2 mx-8' />
      <section>
        <ShowProducts />
      </section>

      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default Details
