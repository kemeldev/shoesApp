import { useState } from 'react'
import { leftredarrow, rightredarrow } from '../assets/icons'
import './superquality.css'
import { discovers } from '../constants'

const SuperQuality = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleButtonClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <main className='main'>
      <section className='carrusel'>
        <div className='sliderContainer' style={{ transform: `translateX(-${currentIndex / discovers.length * 100}%)` }}>
          {discovers.map((discover, index) => (
            <div key={index}>
              <img src={discover.img} alt={discover.category} />
            </div>
          ))}
        </div>
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

export default SuperQuality
