import { heroImage1 } from '../assets/images'

const Hero = () => {
  return (
    <section
      className='w-full h-[400px] relative flex flex-row  bg-black border border-red-500'
    >
      <div className='text-white text-[36px] pl-6 flex-col h-full w-2/5 items-center border border-blue-500'>
        <h1>Express your style</h1>
        <h1>Something that matters</h1>
        <button className='bg-white text-black w-60 text-[18px]'>Shop Now</button>
      </div>
      <div className='w-3/5 flex  justify-center items-center border border-green-500'>
        <img
          src={heroImage1}
          alt='shoppingCartLogo'
          width={300}
          height={300}
        />
      </div>
    </section>
  )
}

export default Hero
