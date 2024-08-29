import { Link } from "react-router-dom";
import remove_product from "../Assets/minus-circle.svg";
import add_product from "../Assets/plus-circle.svg";
import files from "../Assets/files.svg";
const SideBare = () => {
	return (
		<div className='flex flex-col w-60 h-[90vh] py-6 gap-y-6 bg-white items-center border-r-[0.8px] border-dashed border-[#256eb]'>
			<Link to={"/add_product"} style={{ textDecoration: "none" }}>
				<div className='flex flex-row items-center p-2'>
					<img src={add_product} alt='' />
					<h2 className=' pl-2 font-light text-xl'>Add Product</h2>
				</div>
			</Link>
			<Link to={"/all_products"} style={{ textDecoration: "none" }}>
				<div className='flex flex-row items-center p-2'>
					<img src={files} alt='' />
					<h2 className=' pl-2 font-light text-xl'>Products List</h2>
				</div>
			</Link>
		</div>
	);
};

export default SideBare;
