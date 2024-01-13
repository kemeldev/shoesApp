import { Nav } from '../../components/Nav'
import { Footer } from '../../sections'
import { useParams } from 'react-router-dom'
import useFiltersStore from '../../store/filtersStore'
import { useState, useEffect } from 'react'
import { sizes } from '../../constants'
import './ShoeDetails.css'
import useCartStore from '../../store/cartStore'

function Details () {
  const { productsList } = useFiltersStore()
  const { id } = useParams()
  const numericId = parseInt(id)
  const product = productsList.find(product => product.id === numericId)
  const roundedRating = Math.ceil(product.rating * 10) / 10
  // const relatedShoes = productsList.filter(productList => productList.category === product.category)
  const { cartProducts, addCartProduct, removeCartProduct } = useCartStore()
  const [isInCart, setIsInCart] = useState()

  useEffect(() => {
    // Scroll to the top of the page when the component is rendered
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const checkCartProducts = () => {
      return cartProducts.some(item => item.id === product.id)
    }
    setIsInCart(checkCartProducts())
  }, [cartProducts])

  const handleAddToCart = () => {
    const newProduct = product
    addCartProduct(newProduct)
    setIsInCart(true)
  }

  const handleRemoveToCart = () => {
    const newProduct = product.id
    removeCartProduct(newProduct)
    setIsInCart(false)
  }

  return (
    <main className='relative'>
      <Nav />
      <hr className='border-t-2 border-black my-0 mx-8' />
      <section />
      <section className='flex flex-col sm:flex-row w-full '>
        <div
          className='flex flex-col w-full justify-center border border-red-800'

        >
          <div className='w-[85%] mx-auto flex  justify-center border-4 border-cyan-800'>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          {/* <div>
            {product.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={item}
              />
            ))}
          </div> */}
        </div>

        <div className='flex flex-col w-full  border-green-800 border-4 sticky'>
          <span>{product.brand}</span>
          <span>{product.category}</span>
          <strong>{product.title}</strong>
          <p>${product.price} {product.discountPercentage >= 30 ? `% Discount ${product.discountPercentage}` : ''}</p>
          <div>
            <i data-star={roundedRating} />
          </div>

          <h2>Description</h2>
          <p>{product.description}</p>
          <h3>Choose your Size</h3>
          <div className='grid sm:grid-cols-4 md:grid-cols-5 gap-0 cursor-pointer'>
            {sizes.map((size, index) => (
              <div
                key={index}

              >
                <div className='h-16 w-16 border border-black flex justify-center items-center'>{size}</div>
              </div>
            ))}
          </div>
          <div>
            {isInCart
              ? (
                <div>
                  <span>This item is already been added to the cart</span>

                  <button
                    className='border border-black bg-black text-white'
                    onClick={handleRemoveToCart}
                  >
                    Remove from Cart
                  </button>
                </div>

                )
              : (
                <button
                  className='border border-black bg-black text-white'
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                )}
          </div>

        </div>
      </section>

      <section className='w-full'>
        <h2>Recommended products</h2>
        <p>Here goes a carrousel array of the recommended products</p>
      </section>

      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default Details
