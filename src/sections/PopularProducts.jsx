import { products as productsList } from '../products/productsList.json'
import { PopularProductCard } from '../components'
import { useState, useEffect } from 'react'

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([])

  // Function to generate a random number between 0 and max (exclusive)
  function getRandomNumber (max) {
    return Math.floor(Math.random() * max)
  }

  // Function to get an array of 5 unique random items
  function getRandomItems (array, count) {
    const randomItems = []

    while (randomItems.length < count) {
      const randomIndex = getRandomNumber(array.length)
      const selectedItem = array[randomIndex]

      // Make sure the selected item is not already in the randomItems array
      if (!randomItems.includes(selectedItem)) {
        randomItems.push(selectedItem)
      }
    }

    return randomItems
  }

  // Get 5 random items
  const randomProducts = getRandomItems(productsList, 6)

  useEffect(() => {
    setPopularProducts(randomProducts)
  }, [])

  return (
    <section id='products' className='max-container max-sm:mt-12 mx-8 uppercase font-roboto font-black'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-[34px] font-palanquin font-bold'>
          Community <span className='text-blue-900'> Favourite </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className=' grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6'>
        {popularProducts.map((product) => (
          <PopularProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
