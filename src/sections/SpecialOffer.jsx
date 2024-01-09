import { arrowRight } from '../assets/icons'
import { Button } from '../components'

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src='https://images3.alphacoders.com/672/672125.jpg'
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-black font-roboto'>
          <span className='text-blue-900'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Create an account and get 40% of discount un your first pair of shoes
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Register Now' iconURL={arrowRight} />

        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
