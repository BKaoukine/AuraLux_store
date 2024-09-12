import { useEffect, useState } from "react";
import trash from "../Assets/trash.svg";
const ListProducts = () => {
	const [allproduct, setAllProducts] = useState([]);

	const fetchInfo = async () => {
		await fetch("http://localhost:4000/all_products")
			.then((resp) => resp.json())
			.then((data) => {
				setAllProducts(data);
			});
	};

	useEffect(() => {
		fetchInfo();
	}, []);

	const removeProduct = async (id) => {
		await fetch("http://localhost:4000/remove_product", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: id }),
		});
		await fetchInfo();
	};

	return (
		<>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto mt-10'>
				<div className='p-4 bg-white dark:bg-gray-900'>
					<label htmlFor='table-search' className='sr-only'>
						Search
					</label>
					<div className='relative mt-1'>
						<div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500 dark:text-gray-400'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='text'
							id='table-search'
							className='block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Search for items'
						/>
					</div>
				</div>
				<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' className='p-4'>
								<div className='flex items-center'></div>
							</th>
							<th scope='col' className='px-6 py-3'>
								Products
							</th>
							<th scope='col' className='px-6 py-3'>
								Title
							</th>
							<th scope='col' className='px-6 py-3'>
								Category
							</th>
							<th scope='col' className='px-6 py-3'>
								Old Price
							</th>
							<th scope='col' className='px-6 py-3'>
								New Price
							</th>
							<th scope='col' className='px-6 py-3'>
								Remove
							</th>
						</tr>
					</thead>
					<tbody>
						{allproduct.map((product, index) => {
							return (
								<tr
									className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
									key={index}>
									<td className='w-4 p-4'>
										<div className='flex items-center'>
											<input
												id='checkbox-table-search-1'
												type='checkbox'
												className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
											/>
											<label
												htmlFor='checkbox-table-search-1'
												className='sr-only'>
												checkbox
											</label>
										</div>
									</td>
									<th
										scope='row'
										className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										<img className='w-24' src={product.image} alt='' />
									</th>
									<td className='px-6 py-4'>{product.name}</td>
									<td className='px-6 py-4'>{product.category}</td>
									<td className='px-6 py-4'>${product.old_Price}</td>
									<td className='px-6 py-4'>${product.new_Price}</td>
									<td className='px-6 py-4'>
										<img
											onClick={() => {
												removeProduct(product.id);
											}}
											src={trash}
											alt=''
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ListProducts;
