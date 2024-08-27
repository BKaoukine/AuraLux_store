import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import trash from "../Assets/trash.svg";
import { All_Products } from "../Assets/All_Products";
export const CartItems = () => {
	const { All_Products, cartItems, removeFromCart } = useContext(ShopContext);

	return (
		<div class='relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] my-[5%] mx-auto'>
			<table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' class='px-6 py-3'>
							Product
						</th>
						<th scope='col' class='px-6 py-3'>
							Product name
						</th>
						<th scope='col' class='px-6 py-3'>
							Category
						</th>
						<th scope='col' class='px-6 py-3'>
							Price
						</th>
						<th scope='col' class='px-6 py-3'>
							Quantity
						</th>
						<th scope='col' class='px-6 py-3'>
							Total
						</th>
						<th scope='col' class='px-6 py-3'>
							Remove
						</th>
					</tr>
				</thead>
				<tbody>
					{All_Products.map((e) => {
						if (cartItems[e.id] > 0) {
							return (
								<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
									<th
										scope='row'
										class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										<img className='w-20' src={e.image} alt='' />
									</th>
									<td class='px-6 py-4'>{e.name}</td>
									<td class='px-6 py-4'>{e.category}</td>
									<td class='px-6 py-4'>{e.newPrice}</td>
									<td class='px-6 py-4'>
										<div className='p-4'>{cartItems[e.id]}</div>
									</td>
									<td class='px-6 py-4'>${e.newPrice * cartItems[e.id]}</td>
									<td class='px-6 py-4'>
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
						}
					})}
				</tbody>
			</table>
		</div>
	);
};
