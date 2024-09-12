import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { ProductDesc } from "../Components/ProductDesc/ProductDesc";
import { RelatedProduct } from "../Components/RelatedProduct/RelatedProduct";

export const Product = () => {
	const { all_product } = useContext(ShopContext);
	const { productId } = useParams();
	const product = all_product.find((e) => e.id === Number(productId));

	return (
		<>
			<ProductDisplay product={product} />
			<ProductDesc />
			<RelatedProduct />
		</>
	);
};
