// eslint-disable-next-line no-unused-vars
import react, { useState } from "react";
import img_placeholder from "../Assets/img_placeholder.svg";

const AddProduct = () => {
	const [image, setImage] = useState(false);
	const [productDetails, setProductDetails] = useState({
		name: "",
		image: "",
		category: "",
		new_Price: "",
		old_Price: "",
	});
	const ImageHandler = (e) => {
		setImage(e.target.files[0]);
	};

	const changeHandler = (e) => {
		setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
	};

	const add_Product = async () => {
		console.log(productDetails);
		let responseData;
		let product = productDetails;

		let formData = new FormData();
		formData.append("product", image);
		await fetch("http://localhost:4000/upload", {
			method: "POST",
			headers: {
				Accept: "application/json",
			},
			body: formData,
		})
			.then((resp) => resp.json())
			.then((data) => {
				responseData = data;
			});

		if (responseData.success) {
			product.image = responseData.image_url;
			console.log(product);

			await fetch("http://localhost:4000/add_product", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(product),
			})
				.then((resp) => resp.json())
				.then((data) => {
					data.success ? alert("Product Added") : alert("Failed");
				});
		}
	};
	return (
		<div className='mx-20 my-10'>
			<form className='max-w-md mx-auto space-y-12'>
				<div className='relative z-0 w-full mb-5 group'>
					<input
						value={productDetails.name}
						onChange={changeHandler}
						type='text'
						name='name'
						id='product_name'
						className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
						placeholder=' '
						required
					/>
					<label
						htmlFor='product_name'
						className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
						Product name
					</label>
				</div>

				<div className='grid md:grid-cols-2 md:gap-6'>
					<div className='relative z-0 w-full mb-5 group'>
						<input
							value={productDetails.old_Price}
							onChange={changeHandler}
							type='number'
							name='old_Price'
							id='old_price'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
						/>
						<label
							htmlFor='old_price'
							className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Price
						</label>
					</div>
					<div className='relative z-0 w-full mb-5 group'>
						<input
							value={productDetails.new_Price}
							onChange={changeHandler}
							type='number'
							name='new_Price'
							id='new_price'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
						/>
						<label
							htmlFor='new_price'
							className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
							Offer Price
						</label>
					</div>
				</div>
				<div className='relative z-0 w-full mb-5 group'>
					<label
						htmlFor='category'
						className='block mb-2 text-sm font-medium text-gray-500 dark:text-white'>
						Select Product Category
					</label>
					<select
						name='category'
						value={productDetails.category}
						onChange={changeHandler}
						id='category'
						className='bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
						<option value=''>Category</option>
						<option value='Shop'>Shop</option>
						<option value='Rings'>Rings</option>
						<option value='Necklaces'>Necklaces</option>
						<option value='Earrings'>Earrings</option>
						<option value='Bracelets'>Bracelets</option>
						<option value='Packs'>Packs</option>
					</select>
				</div>
				<div className='relative z-0 w-full mb-5 group'>
					<label
						className='block mb-2 text-sm font-medium text-gray-500 dark:text-white'
						htmlFor='product_image'>
						Upload file
					</label>
					<input
						className='block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
						aria-describedby='product_image'
						id='product_image'
						type='file'
						onChange={ImageHandler}
					/>
					<img
						className='w-32 my-4'
						src={image ? URL.createObjectURL(image) : img_placeholder}
						alt=''
					/>
				</div>

				<button
					onClick={(e) => {
						e.preventDefault();
						add_Product();
					}}
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Add Product
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
