import { hamburger, searchIcon, shoppingCartBlack } from '../assets/icons'

import { shoestorelogo } from '../assets/images'
// import { navLinks } from '../constants'

export function Nav () {
  return (
    <header className='padding-x py-8 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <div className='flex row-auto gap-4'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
          <img src={searchIcon} alt='hamburger icon' width={25} height={25} />
        </div>
        <div />
        <a href='/' className='block mx-auto'>
          <img
            src={shoestorelogo}
            alt='brand logo'
            width={120}
            height={50}
          />
        </a>

        <div className='flex row-auto gap-2'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>
            <img
              src={shoppingCartBlack}
              alt='shoppingCartLogo'
              width={30}
              height={30}
            />
          </a>
        </div>

      </nav>
    </header>
  )

  // <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
  //         {navLinks.map((item) => (
  //           <li key={item.label}>
  //             <a
  //               href={item.href}
  //               className='font-montserrat leading-normal text-lg text-slate-gray'
  //             >
  //               {item.label}
  //             </a>
  //           </li>
  //         ))}
  //       </ul>
}
