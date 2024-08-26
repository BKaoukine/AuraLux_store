import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'

export const Product = () => {

    const {All_Products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = All_Products.find((e) => e.id === Number(productId));

  return (
 
    <ProductDisplay product={product} />
  )
}
