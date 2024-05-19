import React from 'react';
import heroImage from '../assets/images/hero.jpg';
import Image from 'next/image';
import Search from './Search';

const Hero = () => {
  return (
    <div className='relative h-[60vh] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full'>
        <Image
            src={heroImage}
            alt="hero image"
            className='object-cover w-full h-[60vh] lg:h-full'
        />
        <Search />
    </div>
  )
}

export default React.memo(Hero);