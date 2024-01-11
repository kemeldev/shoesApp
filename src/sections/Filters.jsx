import { Accordion } from '../components/Accordion'
import { brands, categories, promotions } from '../constants'

export function Filters ({ isActive }) {
  return (
    <main className={`${isActive ? 'w-1/4' : 'w-0'} transition-all ease-in-out duration-500 overflow-hidden`}>
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
          <Accordion title='Promotions' content={promotions} />
        </div>
      </div>
    </main>
  )
};
