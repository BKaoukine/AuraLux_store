import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as HeroImage } from "../Assets/HeroImage.svg";
import { ReactComponent as CircleArrow } from "../Assets/caret-circle-double-down.svg";
export const Hero = () => {
	return (
		<div className='flex flex-col-reverse items-center md:flex-row w-full'>
			{/* Hero left */}
			<motion.div
				className='w-full md:w-1/2 flex flex-col justify-center items-center'
				initial={{ opacity: 0, x: "-100vh" }}
				animate={{ opacity: 1, x: 0, transition: { delay: 1, duration: 1 } }}>
				<div className='space-y-4 lg:space-y-8 text-[#263238] text-center'>
					{" "}
					{/* Ensure text is centered */}
					<p className='font-bold text-md lg:text-4xl'>
						Discover a new way of shopping for jewelry
					</p>
					<ul className='flex flex-col space-y-2 lg:space-y-4 items-center'>
						<li>
							<h1 className='font-extrabold text-xl lg:text-6xl'>
								New Arrivals
							</h1>
						</li>
						<li>
							<h1 className='font-extrabold text-xl lg:text-6xl'>Discounts</h1>
						</li>
					</ul>
					<div className='flex justify-center'>
						{" "}
						{/* Center the button */}
						<motion.button
							initial={{ boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.2)" }}
							whileHover={{
								boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.8)",
								transition: { duration: 0.8 },
							}}
							type='button'
							className='flex flex-row items-center justify-center bg-blue-600 py-2 px-4 lg:py-4 lg:px-8 space-x-4 rounded-full'>
							<h1 className='text-xl text-[#263238]'>Shop Now</h1>
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: [-5, 0, 5] }}
								transition={{
									duration: 0.7,
									repeat: Infinity,
									repeatType: "mirror",
								}}>
								<CircleArrow />
							</motion.div>
						</motion.button>
					</div>
				</div>
			</motion.div>

			{/* Hero right */}
			<motion.div
				className='w-full md:w-1/2'
				initial={{ opacity: 0, x: "100vh" }}
				animate={{ opacity: 1, x: 0, transition: { delay: 1, duration: 1 } }}>
				<HeroImage />
			</motion.div>
		</div>
	);
};
