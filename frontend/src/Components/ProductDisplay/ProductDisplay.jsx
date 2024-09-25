import React, { useContext } from "react";
import star_fill from "../Assets/star-fill.svg";
import star_light from "../Assets/star-light.svg";
import { ShopContext } from "../../Context/ShopContext";
import { motion } from "framer-motion";
export const ProductDisplay = (props) => {
	const { product } = props;
	const { addToCart } = useContext(ShopContext);
	return (
		<motion.div
			className='w-full lg:w-[80%] flex flex-col md:flex-row mx-auto my-[5%] text-[#263238] justify-center'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 0.6, duration: 1.2, ease: "backInOut" },
			}}>
			{/* Product images */}
			<div className='w-full md:w-1/2 md:mx-4 flex flex-col-reverse md:flex-col lg:flex-row gap-y-4 lg:gap-x-4'>
				<div className='w-[90%] mx-auto md:mx-0  md:w-[18%] flex flex-row gap-x-5 lg:flex-col lg:gap-y-5'>
					<img className='w-[20%] md:w-full' src={product.image} alt='' />
					<img className='w-[20%] md:w-full' src={product.image} alt='' />
					<img className='w-[20%] md:w-full' src={product.image} alt='' />
					<img className='w-[20%] md:w-full' src={product.image} alt='' />
				</div>
				<div className='w-[90%] mx-auto md:mx-0 lg:w-[80%]'>
					<img src={product.image} alt='' />
				</div>
			</div>

			{/* Product Details */}
			<div className='w-full md:w-1/2 flex flex-col pl-8 gap-y-4'>
				<h1 className='font-black text-4xl'>{product.name}</h1>

				<div className='flex flex-row w-[20px]'>
					<img src={star_fill} alt='' />
					<img src={star_fill} alt='' />
					<img src={star_fill} alt='' />
					<img src={star_fill} alt='' />
					<img src={star_light} alt='' />
					<p>(133)</p>
				</div>

				<div className='flex flex-row gap-x-4 text-xl mt-4 font-bold'>
					<h1 className='text-gray-400 line-through'>${product.old_Price}</h1>
					<h1 className='text-red-500'>${product.new_Price}</h1>
				</div>

				<div className='flex flex-col mt-6 gap-y-6'>
					<h1 className='text-gray-400 font-medium'>Select Size</h1>
					<div className='flex flex-row gap-x-4'>
						{["S", "M", "L", "XL"].map((size) => (
							<motion.button
								key={size}
								className='w-[60px] bg-slate-100 font-light p-4 border-[1px] border-gray-200'
								whileHover={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)" }}
								transition={{ duration: 0.4 }}>
								{size}
							</motion.button>
						))}
					</div>

					<motion.button
						onClick={() => addToCart(product.id)}
						className='uppercase bg-red-500 px-8 py-4 w-[180px] text-white font-medium'
						whileHover={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)" }}
						transition={{ duration: 0.4 }}>
						Add To Cart
					</motion.button>
				</div>

				<div className='flex flex-col gap-y-6 mt-6'>
					<h1>
						<strong>Category:</strong> {product.category}
					</h1>
					<h2>
						<strong>Tags:</strong> Rings, Discount, Gold
					</h2>
				</div>
			</div>
		</motion.div>
	);
};
