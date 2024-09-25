import React from "react";
import { Item } from "../Items/Item";
import newCollections from "../Assets/collections";
import { motion } from "framer-motion";
export const RelatedProduct = () => {
	return (
		<div className='w-[80%] flex flex-col  mx-auto my-[5%] items-center'>
			<motion.h1
				className='text-4xl font-bold text-[#263238] mb-6'
				initial={{ x: -10, opacity: 0 }}
				whileInView={{
					x: 0,
					opacity: 1,
					transition: { delay: 0.6, duration: 1 },
				}}>
				Related Product
			</motion.h1>
			<motion.hr
				className='w-40 h-2 bg-[#263238]'
				initial={{ width: 0 }}
				whileInView={{
					width: "100%",
					transition: { delay: 0.6, duration: 1 },
				}}
			/>

			<div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{newCollections.map((item, i) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							old_price={item.oldPrice}
							new_price={item.newPrice}
						/>
					);
				})}
			</div>
		</div>
	);
};
