import React from "react";
import { motion } from "framer-motion";

export const NewsLetter = () => {
	return (
		<motion.div
			className='w-[90%] flex flex-col bg-gradient-to-b from-sky-500 to-white my-[100px] mx-auto justify-center items-center text-[#263238] text-center space-y-4 lg:space-y-10 p-10 lg:p-20'
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1 }}>
			<motion.h1
				className='text-lg md:text-4xl lg:text-6xl font-medium text-[#263238] uppercase'
				initial={{ x: -100 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 1 }}>
				Get Exclusive offers on your Email
			</motion.h1>

			<motion.p
				className='uppercase font-bold text-sm md:text-md lg:text-2xl'
				initial={{ x: 100 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 1, delay: 0.2 }}>
				Subscribe to our Newsletter and stay updated
			</motion.p>

			<motion.div
				className='flex lg:flex-row'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}>
				<input
					type='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-0.5 pl-4 mb-2 me-2 w-60 md:w-80'
					placeholder='john.doe@company.com'
					required
				/>
				<button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white'>
					<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
						Subscribe
					</span>
				</button>
			</motion.div>
		</motion.div>
	);
};
