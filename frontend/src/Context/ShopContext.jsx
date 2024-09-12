import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

let getDefaultCart = () => {
	let cart = {};

	for (let index = 0; index < 300 + 1; index++) {
		cart[index] = 0;
	}
	return cart;
};

const ShopContextProvider = (props) => {
	const [all_product, setAll_Product] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/all_products")
			.then((response) => response.json())
			.then((data) => setAll_Product(data));
		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/getcart", {
				method: "POST",
				headers: {
					Accept: "application/form-data",
					"auth-token": `${localStorage.getItem("auth-token")}`,
					"Content-Type": "application/json",
				},
				body: "",
			})
				.then((response) => response.json())
				.then((data) => setCartItems(data));
		}
	}, []);

	const [cartItems, setCartItems] = useState(getDefaultCart());

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/addtocart", {
				method: "POST",
				headers: {
					accept: "application/form-data",
					"auth-token": `${localStorage.getItem("auth-token")}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ itemId: itemId }),
			})
				.then((response) => response.json())
				.then((data) => console.log(data));
		}
	};
	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
		if (localStorage.getItem("auth-token")) {
			fetch("http://localhost:4000/removefromcart", {
				method: "POST",
				headers: {
					accept: "application/form-data",
					"auth-token": `${localStorage.getItem("auth-token")}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ itemId: itemId }),
			})
				.then((response) => response.json())
				.then((data) => console.log(data));
		}
	};
	const contextValue = { all_product, cartItems, addToCart, removeFromCart };

	console.log(cartItems);
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContextProvider;
