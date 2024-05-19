import Image from 'next/image';
import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className='sticky shadow-md top-0 z-50 flex justify-between bg-white p-5 md:px-10'>
      <div className='relative lg:hidden flex items-center h-10 cursor-pointer my-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 lg:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className='items-center h-10 cursor-pointer my-auto max-w-[15rem] flex-none'>
        <Image 
          src={logo}
          alt="logo"
          className='w-full h-full object-cover bg-transparent border-none'
        />
      </div>
      <nav className='hidden lg:flex max-w-[60rem] flex-grow justify-between items-center px-3 list-none whitespace-nowrap'>
        <li className='cursor-pointer hover:text-blue-500'>For Buyers</li>
        <li className='cursor-pointer hover:text-blue-500'>For Owners</li>
        <li className='cursor-pointer hover:text-blue-500'>For Dealers / Builders</li>
        <li className='cursor-pointer hover:text-blue-500'>Property Management</li>
        <li className='cursor-pointer hover:text-blue-500'>Legal Services</li>
        <li className='cursor-pointer hover:text-blue-500'>Hotels</li>
        <li className='cursor-pointer hover:text-blue-500'>Sale Your Property</li>
      </nav>
      <div className='flex items-end justify-end text-gray-400 max-w-16 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  )
}

export default React.memo(Header);