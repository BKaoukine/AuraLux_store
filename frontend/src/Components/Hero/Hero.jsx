import React from 'react'
import {ReactComponent as HeroImage} from '../Assets/HeroImage.svg'
import {ReactComponent as CircleArrow} from '../Assets/caret-circle-double-down.svg'
export const Hero = () => {
  return (
    <div className='flex flex-row w-full'>

        {/* Hero left */}
        <div className='w-1/2 flex flex-col justify-center items-center'>
            <div className='space-y-8 text-[#263238]'>
            <p className='font-bold text-4xl'>Discover a new way of shopping for jewelry</p>
            <ul className='space-y-4'>
                <li>
                    <h1 className='font-extrabold text-6xl'>New Arrivals</h1>
                </li>
                <li>
                    <h1 className='font-extrabold text-6xl'>Discounts</h1>
                </li>
            </ul>
            <button type='button' className='flex flex-row items-center justify-center bg-blue-600 pt-4 pb-4 pl-8 pr-8 space-x-4 rounded-full hover:shadow-md hover:shadow-[#263238]'>
                <h1 className='text-xl text-[#263238]'>Shop Now</h1>
                <CircleArrow/>
            </button>
            </div>
           

        </div>
            
            
        

        {/* Hero right */}
        <div className='w-1/2'>
                <HeroImage/>
        </div>
    </div>
  )
}
