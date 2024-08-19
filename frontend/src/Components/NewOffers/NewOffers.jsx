import React from 'react'
import HijabiWomen from '../Assets/HijabiWomen.png'
export const NewOffers = () => {
  return (
    <div className='w-[90%] flex flex-row bg-gradient-to-r from-blue-500 to-cyan-500 m-[100px] justify-center items-center text-[#263238]'>
        <div className='w-1/2 flex flex-col items-center justify-center  space-y-8'>
            <h1 className=' font-black text-6xl'>Exclusive</h1>
            <h1 className=' font-black text-6xl'>Offers for you</h1>
            <p className='uppercase font-bold text-4xl'>only on best sellers products</p>
            <button type='button' className='flex flex-row items-center justify-center bg-blue-600 pt-4 pb-4 pl-8 pr-8 space-x-4 rounded-full hover:shadow-md hover:shadow-[#263238]'>
                <h1 className='text-xl text-white'>Check Now</h1>
            </button>
        </div>
        <div className='w-1/2 flex  justify-center items-center'>
            <img className='w-[400px] ' src={HijabiWomen} alt="" />
        </div>
    </div>
  )
}
