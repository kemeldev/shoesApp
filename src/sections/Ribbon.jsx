import { useEffect, useState } from 'react'
import { ribbonDescription } from '../constants'

export function Ribbon () {
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ribbonDescription.length)
  }

  useEffect(() => {
    const intervalId = setInterval(changeIndex, 3000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <>
      <header className='bg-slate-400 relative flex justify-center w-full h-12 overflow-hidden'>
        <div className=' w-full transform scale-x-3'>
          {ribbonDescription.map((ribbon, index) => (
            <div
              key={index}
              className={`text-center ribbon-item ${
              index === currentIndex ? 'active' : 'hidden'
            }`}

            >
              <strong>{ribbon.title}</strong>
              <p>{ribbon.description}</p>
            </div>
          ))}
        </div>

      </header>
    </>
  )
}
