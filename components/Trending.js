import React from 'react';

const Trending = () => {
  return (
    <div className='w-full p-2 lg:mt-[7rem]'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-md lg:text-2xl'>Projects in <span className='text-blue-500'>High Demand</span></p>
            <p className='text-gray-400'>Find and book a great Property</p>
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 mx-auto px-8 sm:px-16'>
            
        </div>
    </div>
  )
}

export default React.memo(Trending);