import { Accordion } from '../components/Accordion'
import { brands, categories } from '../constants'

export function Filters ({ isActive }) {
  const promo = ['1', '3']
  return (
    <main className='w-1/4 border border-red-800 '>
      <div className='p-4 w-full bg-gray-400 rounded-lg flex flex-col transition-all '>
        <div className='mb-4'>
          <Accordion title='Brands' content={brands} />
        </div>
        <hr className='border-t-2 border-slate-500' />
        <div className='mb-4'>
          <Accordion title='Categories' content={categories} />
        </div>
        <hr className='border-t-2 border-slate-500' />
        <div className='mb-4'>
          <Accordion title='Promotions' content={promo} />
        </div>
      </div>
    </main>
  )
};
