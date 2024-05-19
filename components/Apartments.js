import React from 'react';

const Apartments = () => {
  return (
    <div className='w-full p-2 lg:mt-[7rem]'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-md lg:text-2xl'><span className='text-blue-500'>Apartment, Vilas</span> and More</p>
            <p className='text-gray-400'>Find and book a great Property</p>
        </div>
        <div className='px-8 sm:px-16'>

        </div>
    </div>
  )
}

export default React.memo(Apartments);