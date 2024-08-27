import React from "react";
import { Item } from "../Items/Item";
import newCollections from "../Assets/collections";
export const RelatedProduct = () => {
	return (
		<div className='w-[80%] flex flex-col  mx-auto my-[5%] items-center'>
			<h1 className='text-4xl font-bold text-[#263238] mb-6'>
				Related Product
			</h1>
			<hr className='w-40 h-2 bg-[#263238]' />

			<div className='pt-10 grid grid-cols-4 gap-6'>
				{newCollections.map((item, i) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							old_price={item.oldPrice}
							new_price={item.newPrice}
						/>
					);
				})}
			</div>
		</div>
	);
};
