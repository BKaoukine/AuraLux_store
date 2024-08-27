import React, { useContext } from "react";
import star_fill from "../Assets/star-fill.svg";
import star_light from "../Assets/star-light.svg";
import { ShopContext } from "../../Context/ShopContext";
export const ProductDisplay = (props) => {
	const { product } = props;
	const { addToCart } = useContext(ShopContext);
	return (
		<div className='w-[80%] flex flex-row  mx-auto my-[5%] text-[#263238] items-center'>
			{/* Product images */}
			<div className='w-1/2 flex flex-row gap-x-4'>
				<div className='w-[18%] flex flex-col gap-y-5'>
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
				</div>
				<div className='w-[80%]'>
					<img src={product.image} alt='' />
				</div>
			</div>

			{/* Product Details */}
			<div className='w-1/2 flex flex-col pl-8 gap-y-4'>
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
					<h1 className='text-gray-400 line-through'>${product.oldPrice}</h1>
					<h1 className='text-red-500'>${product.newPrice}</h1>
				</div>

				<p className='font-light text-lg mt-4'>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
				</p>

				<div className='flex flex-col mt-6 gap-y-6'>
					<h1 className='text-gray-400 font-medium'>Select Size</h1>
					<div className='flex flex-row gap-x-4'>
						<button className='w-[60px] bg-slate-100 font-light p-4 border-[1px] border-gray-200'>
							S
						</button>
						<button className='w-[60px] bg-slate-100 font-light p-4 border-[1px] border-gray-200'>
							M
						</button>
						<button className='w-[60px] bg-slate-100 font-light p-4 border-[1px] border-gray-200'>
							L
						</button>
						<button className='w-[60px] bg-slate-100 font-light p-4 border-[1px] border-gray-200'>
							XL
						</button>
					</div>
					<button
						onClick={() => {
							addToCart(product.id);
						}}
						className='uppercase bg-red-500 px-8 py-4 w-[180px] text-white font-medium'>
						Add To Cart
					</button>
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
		</div>
	);
};
