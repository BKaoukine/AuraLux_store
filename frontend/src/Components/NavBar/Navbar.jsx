import React, { useState, useEffect, useContext } from "react";
import shopping_cart from "../Assets/shopping_cart.svg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { motion } from "framer-motion";

export const Navbar = () => {
	const { all_product, cartItems } = useContext(ShopContext);
	const [menu, setMenu] = useState("Shop");
	const [numOfItems, setNumOfItems] = useState(0);

	// Function to calculate the number of items in the cart
	let getNumOfCartItems = () => {
		let totalItems = 0;
		all_product.forEach((product) => {
			if (cartItems[product.id] > 0) {
				totalItems += cartItems[product.id];
			}
		});
		setNumOfItems(totalItems);
	};

	// Trigger the function when cartItems or all_product change
	useEffect(() => {
		getNumOfCartItems();
	}, [cartItems, all_product]);

	return (
		<div className='flex flex-col items-center gap-y-4 md:gap-y-4 p-2 lg:flex-row lg:justify-around  lg:p-4 shadow-md'>
			{/* Logo */}
			<div className='flex items-center gap-2 text-[#263238] text-2xl font-bold'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='None'
					stroke='#2563eb'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					class='lucide lucide-gem'>
					<motion.path
						initial={{ pathLength: 0 }}
						whileInView={{
							pathLength: 1,
							transition: { delay: 0.2, duration: 2 },
						}}
						d='M6 3h12l4 6-10 13L2 9Z'
					/>
					<motion.path
						initial={{ pathLength: 0 }}
						whileInView={{
							pathLength: 1,
							transition: { delay: 0.6, duration: 4 },
						}}
						d='M11 3 8 9l4 13 4-13-3-6'
					/>
					<motion.path
						initial={{ pathLength: 0 }}
						whileInView={{
							pathLength: 1,
							transition: { delay: 0.8, duration: 5 },
						}}
						d='M2 9h20'
					/>
				</svg>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.6, durantion: 5, ease: "easeInOut" },
					}}>
					AuraLux
				</motion.p>
			</div>

			{/* Menu */}
			<ul className='flex items-center gap-4 md:gap-8 lg:gap-12 text-[#263238] text-lg'>
				{/* Menu items */}
				{["Home", "Rings", "Necklaces", "Earrings", "Bracelets", "Packs"].map(
					(item) => (
						<li
							key={item}
							className='cursor-pointer flex flex-col items-center justify-center gap-1'
							onClick={() => setMenu(item)}>
							<Link to={`/${item !== "Home" ? item.toLowerCase() : ""}`}>
								{item}
							</Link>
							{menu === item ? (
								<motion.hr
									initial={{ width: "0%" }}
									animate={{
										width: ["0%", "80%", "0%", "80%"],
										transition: { duration: 1 },
									}}
									className='border-none w-[80%] h-[3px] rounded-lg bg-blue-600'
								/>
							) : (
								<></>
							)}
						</li>
					)
				)}
			</ul>

			{/* Cart and Login/Logout */}
			<div className='flex items-center gap-11'>
				{localStorage.getItem("auth-token") ? (
					<motion.button
						whileHover={{
							boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.4)",
							transition: { duration: 0.3 },
						}}
						whileTap={{
							scale: 0.9,
							boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
						}}
						onClick={() => {
							localStorage.removeItem("auth-token");
							window.location.replace("/");
						}}
						className='w-24 lg:w-36  h-8 lg:h-14 outline-none text-[16px] lg:text-[20px] font-light rounded-[75px] border-[1px] border-solid text-[#263238] bg-white cursor-pointer active:bg-slate-200'>
						Logout
					</motion.button>
				) : (
					<Link to='/loging'>
						<motion.button
							i
							whileHover={{
								boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.4)",
								transition: { duration: 0.3 },
							}}
							whileTap={{
								scale: 0.9,
								boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
							}}
							className='w-24 lg:w-36  h-8 lg:h-14 outline-none text-[16px] lg:text-[20px] font-light rounded-[75px] border-[1px] border-solid text-[#263238] bg-white cursor-pointer active:bg-slate-200'>
							Loging
						</motion.button>
					</Link>
				)}

				<Link to='/cart'>
					<img className='w-6 lg:w-8' src={shopping_cart} alt='' />
				</Link>

				{/* Cart item count */}
				<div className='flex justify-center items-center w-4 h-4 lg:w-5 lg:h-5 mt-[-35px] ml-[-50px] rounded-full text-[12px] bg-blue-600 text-cyan-50'>
					{numOfItems}
				</div>
			</div>
		</div>
	);
};
