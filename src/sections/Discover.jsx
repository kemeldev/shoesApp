import { useState } from 'react'
import './Discover.css'
import { discovers } from '../constants'
import useFiltersStore from '../store/filtersStore'
import { Link } from 'react-router-dom'

const Discover = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const { setGlobalFilters, productsList, setGlobalProducts } = useFiltersStore()
  const positionStyles = [
    { top: '25%', left: '10%' }, // Index 0
    { top: '25%', left: '17%' }, // Index 1
    { top: '25%', left: '25%', right: 'auto', bottom: 'auto' }, // Index 2
    { top: '65%', right: '25%' } // Index 3
  ]

  const handleFilterChange = (category) => {
    // Update global filters
    setGlobalFilters({ category, brand: 'all' })

    // Filter products based on the selected category
    const filteredProducts = productsList.filter((product) => product.category === category)

    // Update global products with the filtered array
    setGlobalProducts(filteredProducts)
  }

  const handleButtonClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <main className='main'>
      <section className='carrusel'>
        <div className='sliderContainer' style={{ transform: `translateX(-${currentIndex / discovers.length * 100}%)` }}>
          {discovers.map((discover, index) => (
            <div key={index}>
              <Link to='/products/'>
                <img
                  src={discover.img}
                  alt={discover.category}
                  className='cursor-pointer'
                  onClick={() => handleFilterChange(discover.category)}
                />
              </Link>
            </div>
          ))}
        </div>
        {discovers.map((discover, index) => (
          <p
            key={index}
            className={`absolute transition-all duration-500 ease-in-out  text-cyan-50 text-3xl ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={positionStyles[index]}
          >
            {discover.category}
          </p>
        ))}
        {/* <p className='absolute top-1/4 left-40 text-cyan-50 text-3xl'>Football</p>
        <p className='absolute top-1/4 left-1/4 text-cyan-50 text-3xl'>Style</p>
        <p className='absolute top-1/4 left-1/4 text-cyan-50 text-3xl'>Running</p>
        <p className='absolute bottom-1/4 right-1/4 text-cyan-50 text-3xl'>Training</p> */}
      </section>
      <div className='btnContainer'>
        {discovers.map((item, index) => (
          <div
            key={index}
            className={`btnChangeSlider ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </main>
  )
}

export default Discover
