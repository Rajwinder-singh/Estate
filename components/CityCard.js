import Image from 'next/image';
import React from 'react'

const CityCard = ({ name, hotelCount, image }) => {
  return (
    <div className='flex font-bold shadow-md p-2 justify-between items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105  transition transform duration-200 ease-out'>
        <div className='relative lg:rounded-xl lg:overflow-hidden h-16 w-16 lg:h-24 lg:w-32'>
            <Image 
                src={image}
                alt={name}
                className='object-cover w-full h-full'
            />
        </div>
        <div className='flex space-y-3 w-full flex-col justify-center items-start'>
            <h2>{name}</h2>
            <div className='flex justify-between lg:text-sm w-full items-end'>
                <p className='whitespace-nowrap'>{hotelCount} Hotels <span className='hidden lg:inline'> . All Kinds of Hotels</span></p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default React.memo(CityCard);