import React from 'react'
import CityCard from './CityCard';
import city from '../assets/images/thumb.jpeg'

const Cities = () => {
  return (
    <div className='w-full p-2 lg:mt-[7rem]'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-md lg:text-2xl'><span className='text-blue-500'>Explore Properties</span> in Popular Cities</p>
            <p className='text-gray-400'>Find and book a great Property</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 mx-auto px-8 sm:px-16'>
            <CityCard name="Delhi" image={city} hotelCount={4} />
            <CityCard name="Delhi" image={city} hotelCount={4} />
            <CityCard name="Delhi" image={city} hotelCount={4} />
            <CityCard name="Delhi" image={city} hotelCount={4} />
            <CityCard name="Delhi" image={city} hotelCount={4} />
        </div>
    </div>
  )
}

export default React.memo(Cities);