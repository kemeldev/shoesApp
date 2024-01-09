import { useState, useEffect } from 'react'
import { heroImageAdidas, heroImageNike, heroImageConverse } from '../assets/images'
import { motion } from 'framer-motion'

const Hero = () => {
  const heroImages = [heroImageAdidas, heroImageConverse, heroImageNike]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index, and reset to 0 if it exceeds the array length
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 2500)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [])
  return (
    <section
      className='w-full h-[600px] sm:h-[450px] relative flex flex-col sm:flex-row bg-black  overflow-hidden'
    >
      <div className='text-white text-[36px] pl-6 flex-col h-full w-full sm:w-2/5 items-center  uppercase font-roboto font-black'>
        <h1>Express your style</h1>
        <h1>Something that matters</h1>
        <button className='bg-white text-black w-60 text-[18px]'>Shop Now</button>
      </div>
      <motion.div
        className='w-full sm:w-3/5 flex justify-center items-center bg-black relative'
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroImages[currentImageIndex]}
          alt='shoppingCartLogo'
          width={500}
        />
      </motion.div>
    </section>
  )
}

export default Hero
