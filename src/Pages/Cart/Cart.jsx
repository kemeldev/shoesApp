import { Nav } from '../../components/Nav'
import { Footer } from '../../sections'
import { useEffect } from 'react'
import useCartStore from '../../store/cartStore'

function Cart () {
  const { cartProducts } = useCartStore()
  const subtotal = cartProducts.reduce((acc, product) => acc + product.price, 0)
  const shippingCharges = 9.99
  const taxes = (subtotal + shippingCharges) * 0.13
  const total = parseFloat((subtotal + shippingCharges + taxes).toFixed(2))

  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0)
  }, [])

  console.log(cartProducts)

  return (
    <main className='relative'>
      <Nav />
      <section>
        <h1>Your bag <span>{cartProducts.length}</span></h1>
      </section>

      <section className='w-full flex flex-row'>
        <div className='w-2/3 flex flex-col gap-3'>
          {
            cartProducts.map((item, index) => (
              <div
                className='flex flex-row gap-3'
                key={index}
              >
                <img src={item.thumbnail} alt={cartProducts.title} width={200} />
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.brand}</h4>
                  <h4>{item.price}</h4>
                </div>
              </div>
            )
            )
}
        </div>

        <div>
          <h1>Order Summary</h1>
          <div className='flex flex-row'>
            <h2>Subtotal</h2>
            <h2>{subtotal}</h2>
          </div>
          <div className='flex flex-row'>
            <h2>Shipping Charges</h2>
            <h2>{shippingCharges}</h2>
          </div>
          <div className='flex flex-row'>
            <h2>Taxes( 13 %)</h2>
            <h2>{taxes}</h2>
          </div>
          <div className='flex flex-row'>
            <h2>Total</h2>
            <h2>$ {total}</h2>
          </div>

          <div className='flex flex-col justify-center gap-6'>
            <button className='w-50 bg-black text-white'>Procced to checkout</button>
            <button className='w-50 bg-black text-white'>Checkout with Paypal</button>
          </div>
        </div>
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>

    </main>
  )
}

export default Cart
