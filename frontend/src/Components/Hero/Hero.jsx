import React from "react";
import { ReactComponent as HeroImage } from "../Assets/HeroImage.svg";
import { ReactComponent as CircleArrow } from "../Assets/caret-circle-double-down.svg";
export const Hero = () => {
	return (
		<div className='flex flex-col-reverse items-center md:flex-row w-full'>
			{/* Hero left */}
			<div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
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
						<button
							type='button'
							className='flex flex-row items-center justify-center bg-blue-600 py-2 px-4 lg:py-4 lg:px-8 space-x-4 rounded-full hover:shadow-md hover:shadow-[#263238]'>
							<h1 className='text-xl text-[#263238]'>Shop Now</h1>
							<CircleArrow />
						</button>
					</div>
				</div>
			</div>

			{/* Hero right */}
			<div className='w-full md:w-1/2'>
				<HeroImage />
			</div>
		</div>
	);
};
