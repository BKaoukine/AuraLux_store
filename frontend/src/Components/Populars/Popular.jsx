import React, { useEffect, useState } from "react";
import { Item } from "../Items/Item";
import { motion } from "framer-motion";
export const Popular = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		fetch("https://auralux-store.onrender.com/popular")
			.then((response) => response.json())
			.then((data) => setPopular(data));
	}, []);
	return (
		<div className='w-full flex flex-col pt-10 pl-[20px] pr-[20px]'>
			<div className='flex flex-col items-center space-y-4'>
				<motion.h1
					className='text-2xl font-medium text-[#263238] uppercase'
					initial={{ x: -10, opacity: 0 }}
					whileInView={{
						x: 0,
						opacity: 1,
						transition: { delay: 0.6, duration: 1 },
					}}>
					Popular
				</motion.h1>
				<motion.hr
					className='bg-blue-600 h-1 w-full'
					initial={{ width: 0 }}
					whileInView={{
						width: "100%",
						transition: { delay: 0.6, duration: 1 },
					}}
				/>
			</div>
			<div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{popular.map((item, i) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							old_price={item.old_Price}
							new_price={item.new_Price}
						/>
					);
				})}
			</div>
		</div>
	);
};
