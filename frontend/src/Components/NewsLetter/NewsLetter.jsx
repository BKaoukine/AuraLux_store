import React from 'react'

export const NewsLetter = () => {
  return (
    <div className='w-[90%] flex flex-col bg-gradient-to-b from-sky-500 to-white m-[100px] justify-center items-center text-[#263238] space-y-10 p-20'>
        <h1 className='text-6xl font-medium text-[#263238] uppercase'>Get Execlusive offers on your Email</h1>
        <p className='uppercase font-bold text-2xl'>
            Subscribe to our NewsLetter and stay updated
        </p>

        <div className='flex flex-row'>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-0.5 pl-4 mb-2 me-2 w-80 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Subscribe
        </span>
        </button>
        </div>
    </div>
  )
}
