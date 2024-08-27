import { createContext, useState } from "react";

import All_Products from "../Components/Assets/All_Products";

export const ShopContext = createContext(null);

let getDefaultCart = () => {
	let cart = {};

	for (let index = 0; index < All_Products.length; index++) {
		cart[index] = 0;
	}
	return cart;
};

const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		console.log(cartItems);
	};
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};
	const contextValue = { All_Products, cartItems, addToCart, removeFromCart };

	console.log(cartItems);
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContextProvider;
