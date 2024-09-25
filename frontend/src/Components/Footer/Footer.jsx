import React from "react";
import logo from "../Assets/logo.svg";
import dev_logo from "../Assets/dev-to-logo.svg";
import insta_logo from "../Assets/instagram-logo.svg";
import pinter_logo from "../Assets/pinterest-logo.svg";
import whats_logo from "../Assets/whatsapp-logo.svg";
import { motion } from "framer-motion";

const footerVariants = {
	hidden: {
		y: "5vh",
		opacity: 0,
	},
	visible1: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 1,
			type: "spring",
		},
	},
	visible2: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.8,
			duration: 1,
			type: "spring",
		},
	},
	visible3: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			duration: 1,
			type: "spring",
		},
	},
};

export const Footer = () => {
	return (
		<div className='flex flex-col mx-auto my-[50px] px-20 pt-20 w-[90%] justify-center items-center gap-y-10'>
			<motion.div
				className='flex items-center gap-2 text-[#263238] text-2xl font-bold'
				variants={footerVariants}
				initial='hidden'
				whileInView={"visible1"}>
				<img className='w-14' src={logo} alt='' />
				<h1 className='text-6xl'>AuraLux</h1>
			</motion.div>
			<motion.div
				variants={footerVariants}
				initial='hidden'
				whileInView={"visible2"}>
				<ul className='flex flex-row gap-x-10 font-light text-[#263238]'>
					<li>Company</li>
					<li>Products</li>
					<li>Offices</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</motion.div>
			<motion.div
				className='flex flex-row gap-x-10'
				variants={footerVariants}
				initial='hidden'
				whileInView={"visible3"}>
				<img src={dev_logo} alt='' />
				<img src={insta_logo} alt='' />
				<img src={pinter_logo} alt='' />
				<img src={whats_logo} alt='' />
			</motion.div>

			<motion.div className='w-full flex flex-col items-center justify-center text-center'>
				<hr className='w-full bg-gray-300 h-0.5' />
				<p className='text-[#263238] font-light p-6'>
					Copyright @ 2024 - All Right Reserved
				</p>
			</motion.div>
		</div>
	);
};
