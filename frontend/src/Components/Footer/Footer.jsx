import React from 'react'
import logo from '../Assets/logo.svg'
import dev_logo from '../Assets/dev-to-logo.svg'
import insta_logo from '../Assets/instagram-logo.svg'
import pinter_logo from '../Assets/pinterest-logo.svg'
import whats_logo from '../Assets/whatsapp-logo.svg'
export const Footer = () => {
  return (
        <div className='flex flex-col mx-[100px] px-20 pt-20 w-[90%] justify-center items-center gap-y-10'>
        
            <div className='flex items-center gap-2 text-[#263238] text-2xl font-bold'>
				<img className='w-14' src={logo} alt='' />
				<h1 className='text-6xl'>AuraLux</h1>
			</div>
            <div >
                <ul className='flex flex-row gap-x-10 font-light text-[#263238]'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex flex-row gap-x-10'>
                <img src={dev_logo} alt="" />
                <img src={insta_logo} alt="" />
                <img src={pinter_logo} alt="" />
                <img src={whats_logo} alt="" />
            </div>
            
            <div className='w-full flex flex-col items-center justify-center'>
            <hr className='w-full bg-gray-300 h-0.5' />
            <p className='text-[#263238] font-light p-6'>
                Copyright @ 2024 - All Right Reserved
            </p>
            </div>
        </div>
  )
}
