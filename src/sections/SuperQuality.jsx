import { useState } from 'react'
import { cityshoe2, city, outdoor, runningpark, footballfield } from '../assets/images'
import { leftredarrow, rightredarrow } from '../assets/icons'
import { Button } from '../components'
import { motion } from 'framer-motion'

const SuperQuality = () => {
  const discoverOptions = {
    footballfield: 'footballfield',
    city: 'city',
    outdoor: 'outdoor',
    runningpark: 'runningpark'
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  console.log(currentImageIndex)

  const images = [city, outdoor, runningpark, footballfield]

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section
      id='about-us'
      className='relative flex justify-between items-center max-lg:flex-col h-[500px] w-full  border border-red-500 text-white overflow-hidden'
    >

      <motion.div
        key={currentImageIndex} // Use a unique key to force the motion.div to re-mount and trigger the animation
        className='absolute top-0 left-0 w-full h-full z-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img src={images[currentImageIndex]} alt='image background' className='w-full h-full object-cover custom-opacity' />
      </motion.div>
      <div className='absolute top-50 right-0 z-20 border border-red-500 cursor-pointer hover:border-red-700' onClick={handleRightArrowClick}>
        <img
          src={rightredarrow}
          width={50}
          alt='image background'
          className='h-26'
        />
      </div>
      <div className='absolute top-50 left-0 z-20 border border-red-500 cursor-pointer hover:border-red-700' onClick={handleLeftArrowClick}>
        <img
          src={leftredarrow}
          width={50}
          alt='image background'
          className='h-26'
        />
      </div>
      <div className='flex flex-1 flex-col pl-12 z-10'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Discover
          <span className='text-coral-red'> City </span>
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg text-white'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg text-white'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center z-10'>
        <img
          src={cityshoe2}
          alt='product detail'
          width={500}
          height={400}
          className='object-contain'
        />

      </div>
    </section>
  )
}

export default SuperQuality
