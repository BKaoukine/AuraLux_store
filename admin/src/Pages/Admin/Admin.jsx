import AddProduct from "../../Components/AddProduct";
import ListProducts from "../../Components/ListProducts";
import SideBare from "../../Components/SideBare";
import { Routes, Route } from "react-router-dom";
const Admin = () => {
	return (
		<div className='flex flex-row'>
			<SideBare />
			<Routes>
				<Route path='/add_product' element={<AddProduct />} />
				<Route path='/all_products' element={<ListProducts />} />
			</Routes>
		</div>
	);
};

export default Admin;
