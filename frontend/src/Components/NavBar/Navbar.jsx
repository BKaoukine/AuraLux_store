import React from "react";
import logo from "../Assets/logo.svg";
import shopping_cart from "../Assets/shopping_cart.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [menu, setMenu] = useState("Shop");
	return (
		<div className='flex justify-around p-4 shadow-md'>
            {/* Logo */}
			<div className='flex items-center gap-2 text-gray-300 text-2xl font-bold'>
				<img src={logo} alt='' />
				<p>AuraLux</p>
			</div>
            {/* Menu */}
			<ul className='flex items-center gap-12 text-[#00008B] text-lg'>
				<li
					className='cursor-pointer flex flex-col items-center justify-center gap-1'
					onClick={() => {
						setMenu("Shop");
					}}>
					<Link to='/'>Shop</Link>
					{menu === "Shop" ? (
						<hr className='border-none w-[80%] h-[3px] rounded-lg bg-blue-600' />
					) : (
						<></>
					)}
				</li>
				<li
					className='cursor-pointer flex flex-col items-center justify-center gap-1'
					onClick={() => {
						setMenu("Rings");
					}}>
					<Link to='/rings'>Rings</Link>
					{menu === "Rings" ? (
						<hr className='border-none w-[80%] h-[3px] rounded-lg bg-blue-600' />
					) : (
						<></>
					)}
				</li>
				<li
					className='cursor-pointer flex flex-col items-center justify-center gap-1'
					onClick={() => {
						setMenu("Necklaces");
					}}>
					<Link to='/necklaces'>Necklaces</Link>
					{menu === "Necklaces" ? (
						<hr className='border-none w-[80%] h-[3px] rounded-lg bg-blue-600' />
					) : (
						<></>
					)}
				</li>
				<li
					className='cursor-pointer flex flex-col items-center justify-center gap-1'
					onClick={() => {
						setMenu("Earrings");
					}}>
					<Link to='/earrings'>Earrings</Link>
					{menu === "Earrings" ? (
						<hr className='border-none w-[80%] h-[3px] rounded-lg bg-blue-600' />
					) : (
						<></>
					)}
				</li>
				<li
					className='cursor-pointer flex flex-col items-center justify-center gap-1'
					onClick={() => {
						setMenu("Bracelets");
					}}>
					<Link to='/bracelets'>Bracelets</Link>
					{menu === "Bracelets" ? (
						<hr className='border-none w-[80%] h-[3px] rounded-lg bg-blue-600' />
					) : (
						<></>
					)}
				</li>
				<li
					className='cursor-pointer flex flex-col items-center justify-center gap-1'
					onClick={() => {
						setMenu("Packs");
					}}>
					<Link to='/packs'>Packs</Link>
					{menu === "Packs" ? (
						<hr className='border-none w-[80%] h-[3px] rounded-lg bg-blue-600' />
					) : (
						<></>
					)}
				</li>
			</ul>
            {/* Cart and loging */}
			<div className='flex items-center gap-11'>
				<Link to='/loging'>
					<button className='w-36 h-14 outline-none text-[20px] font-light rounded-[75px] border-[1px] border-solid text-[#00008B] bg-white cursor-pointer active:bg-slate-200'>
						Loging
					</button>
				</Link>
				<Link to='/cart'>
					<img src={shopping_cart} alt='' />
				</Link>
				<div className='flex justify-center items-center w-5 h-5 mt-[-35px] ml-[-50px] rounded-full text-[12px] bg-blue-600 text-cyan-50'>
					0
				</div>
			</div>
		</div>
	);
};
