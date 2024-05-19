import React from 'react'

const Search = () => {
  return (
    <div className='container absolute bottom-[-40px] md:max-w-[850px] md:bottom-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 md:p-0 md:shadow-lg'>
        <div className='flex flex-col rounded-lg bg-white w-full mx-auto p-[0.5rem] md:p-[2rem]'>
            <div className='w-full overflow-x-hidden md:px-12'>
                <ul className='flex space-x-2 text-sm md:text-lg relative border-b-2 mx-auto'>
                    <li className='li-item selected'>Buy</li>
                    <li className='li-item'>Rent</li>
                    <li className='li-item'>New Launch</li>
                    <li className='li-item'>Commercial</li>
                    <li className='li-item'>Plots / Land</li>
                    <li className='li-item'>Projects</li>
                </ul>
            </div>
            <div className='flex w-full'>
                <select className='hidden md:block border-none focus:outline-none'>
                    <option>All Residentials</option>
                    <option>All Residentials</option>
                    <option>All Residentials</option>
                </select>
                <div className='flex flex-col md:flex-row md:justify-center md:items-center w-full p-3'>
                    <div className='flex w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input type='text' placeholder='Search flats and Plots...' className='w-full flex-grow md:w-auto ml-2 focus:border-transparent focus:outline-none'></input>
                    </div>
                    <button className='bg-blue-500 text-white mt-3 md:m-0 w-full md:w-auto h-[35px] md:min-w-[150px] rounded-lg'>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Search);