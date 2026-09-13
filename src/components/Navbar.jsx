import {useState } from 'react'

import { close, logo1, menu } from '../assets';

import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="#home" className="flex items-center" aria-label="Volver al inicio">
        <img src={logo1} alt="Página de Psicología" className='w-[248px] h-[64px] object-contain cursor-pointer hover:opacity-90 transition-opacity'/>
      </a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary transition-colors`}
          >
            <a href={`#${nav.id}`}> 
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-[10px] sidebar z-50`}
          >
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => 
              (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white hover:text-secondary transition-colors`}
                >
                  <a href={`#${nav.id}`} onClick={() => setToggle(false)}> 
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>

    </nav>
  )
}

export default Navbar