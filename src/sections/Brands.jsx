import { logoAdidas, logoNike, logoConverse, logoUnderArmour } from '../assets/icons'

const Brands = () => {
  const brandsLogos = [logoAdidas, logoConverse, logoNike, logoUnderArmour]

  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-black capitalize font-roboto '>
          The <span className='text-blue-900'> Brands </span> we love
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Know the brands we like to work with
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {brandsLogos.map((brand, index) => (
          <div className='h-60 w-60 border bg-black overflow-hidden flex items-center hover:cursor-pointer' key={index}>
            <img
              src={brand}
              alt={`brandLogo-${index}`}
              className='object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brands
