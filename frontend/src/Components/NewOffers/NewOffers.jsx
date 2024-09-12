import React from "react";
import HijabiWomen from "../Assets/HijabiWomen.png";
export const NewOffers = () => {
	return (
		<div className='w-[90%] flex flex-row bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto my-20 justify-center items-center text-[#263238]'>
			<div className='w-[60%] flex flex-col items-center justify-center space-y-2 md:space-y-4 lg:space-y-8'>
				<h1 className=' font-black text-md md:text-xl lg:text-6xl'>
					Exclusive
				</h1>
				<h1 className=' font-black text-md md:text-xl lg:text-6xl'>
					Offers for you
				</h1>
				<p className='uppercase text-center text-sm font-bold md:text-lg lg:text-4xl'>
					only on best sellers products
				</p>
				<button
					type='button'
					className='flex flex-row items-center justify-center px-4 py-2 bg-blue-600 lg:py-4 lg:px-8 space-x-4 rounded-full hover:shadow-md hover:shadow-[#263238]'>
					<h1 className='lg:text-xl text-white'>Check Now</h1>
				</button>
			</div>
			<div className='w-[30%] flex  justify-center items-center'>
				<img className='w-[200px] lg:w-[400px] ' src={HijabiWomen} alt='' />
			</div>
		</div>
	);
};
