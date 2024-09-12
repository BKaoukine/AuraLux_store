import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import trash from "../Assets/trash.svg";
export const CartItems = () => {
	const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] md:w-[80%] my-[5%] mx-auto'>
			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-1 md:px-3 lg:px-6 py-1 lg:py-3'>
							Product
						</th>
						<th scope='col' className='px-1 md:px-3 lg:px-6 py-1 lg:py-3'>
							Product name
						</th>
						<th scope='col' className='px-1 md:px-3 lg:px-6 py-1 lg:py-3'>
							Category
						</th>
						<th scope='col' className='px-1 md:px-3 lg:px-6 py-1 lg:py-3'>
							Price
						</th>
						<th scope='col' className='px-1 md:px-3 lg:px-6 py-1 lg:py-3'>
							Quantity
						</th>
						<th scope='col' className='px-1 md:px-3 lg:px-6 py-1 lg:py-3'>
							Total
						</th>
						<th scope='col' className='px-1 md:px-3 lg:px-6 py-1 lg:py-3'>
							Remove
						</th>
					</tr>
				</thead>
				<tbody>
					{all_product.map((e, index) => {
						if (cartItems[e.id] > 0) {
							return (
								<tr
									key={index}
									className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
									<th
										scope='row'
										className='px-1 md:px-3 lg:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										<img className='w-20' src={e.image} alt='' />
									</th>
									<td className='px-1 md:px-3 lg:px-6 py-4'>{e.name}</td>
									<td className='px-1 md:px-3 lg:px-6 py-4'>{e.category}</td>
									<td className='px-1 md:px-3 lg:px-6 py-4'>{e.new_Price}</td>
									<td className='px-1 md:px-3 lg:px-6 py-4'>
										<div className='p-4'>{cartItems[e.id]}</div>
									</td>
									<td className='px-1 md:px-3 lg:px-6 py-4'>
										${e.new_Price * cartItems[e.id]}
									</td>
									<td className='px-1 md:px-3 lg:px-6 py-4'>
										<img
											className='w-5'
											src={trash}
											onClick={() => {
												removeFromCart(e.id);
											}}
											alt=''
										/>
									</td>
								</tr>
							);
						} else {
							return null;
						}
					})}
				</tbody>
			</table>
		</div>
	);
};
