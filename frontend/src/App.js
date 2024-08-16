import "./App.css";
import { Navbar } from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";
import { LoginSignup } from "./pages/LoginSignup";
import { Cart } from "./pages/Cart";
function App() {
	return (
		<div>
            {/* This routes are for the element to be rendered on click and the path to be redirected to. */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Shop />} />
					<Route path='/rings' element={<ShopCategory />} category='ring' />
					<Route
						path='/necklaces'
						element={<ShopCategory />}
						category='Necklace'
					/>
					<Route
						path='/earrings'
						element={<ShopCategory />}
						category='Earring'
					/>
					<Route
						path='/bracelets'
						element={<ShopCategory />}
						category='Bracelet'
					/>
					<Route path='/packs' element={<ShopCategory />} category='Pack' />
					<Route path='/product' element={<Product />}>
						<Route path=':productId' element={<Product />} />
					</Route>
					<Route path='/cart' element={<Cart />} />
					<Route path='/loging' element={<LoginSignup />} />
				</Routes>
			</BrowserRouter>

        </div>
	);
}

export default App;
