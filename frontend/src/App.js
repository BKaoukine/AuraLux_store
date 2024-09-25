import "./App.css";
import { Navbar } from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { LoginSignup } from "./pages/LoginSignup";
import { Cart } from "./pages/Cart";
import { Footer } from "./Components/Footer/Footer";
function App() {
	return (
		<div className='overflow-hidden'>
			{/* This routes are for the element to be rendered on click and the path to be redirected to. */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Shop />} />
					<Route path='/rings' element={<ShopCategory category='Rings' />} />
					<Route
						path='/necklaces'
						element={<ShopCategory category='Necklaces' />}
					/>
					<Route
						path='/earrings'
						element={<ShopCategory category='Earrings' />}
					/>
					<Route
						path='/bracelets'
						element={<ShopCategory category='Bracelets' />}
					/>
					<Route path='/packs' element={<ShopCategory category='Packs' />} />
					<Route path='/product' element={<Product />}>
						<Route path=':productId' element={<Product />} />
					</Route>
					<Route path='/cart' element={<Cart />} />
					<Route path='/loging' element={<LoginSignup />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
