import React from "react";
import { motion } from "framer-motion";

export const ProductDesc = () => {
	return (
		<motion.div
			className='w-[80%] flex flex-col  mx-auto my-[5%]'
			initial={{ opacity: 1, scale: 0.9 }}
			whileInView={{
				opacity: 1,
				scale: [0.9, 1],
				transition: { delay: 0.2, duration: 1, ease: "easeIn" },
			}}>
			<div className='flex flex-row'>
				<button className='py-4 px-8 border-[0.5px] border-gray-300 items-center'>
					Description
				</button>
				<button className='py-4 px-6 border-[0.5px] border-gray-300 bg-gray-200 items-center'>
					Reviews (133)
				</button>
			</div>
			<div className='py-12 px-8 border-[0.5px] border-gray-300 items-center text-gray-600'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
				<br />
				<br />
				It has survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets containing
				Lorem Ipsum passages, and more recently with desktop publishing software
				like Aldus PageMaker including versions of Lorem Ipsum.
			</div>
		</motion.div>
	);
};
