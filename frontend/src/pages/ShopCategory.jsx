import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import funnel from '../Components/Assets/funnel.svg'
import { Item } from '../Components/Items/Item';
export const ShopCategory = (props) => {
    let selected = props.category;
    const {All_Products} = useContext(ShopContext)
    return(
        <>
        <div className='my-20 ml-20 space-y-4 text-[#263238]'>
        <h1 className='text-6xl uppercase font-black'>
            {selected}
        </h1>
        <p className='text-2xl font-light'>Elevate your jewelry ensemble with silver and gold {selected}</p>
        </div>

        <div className='ml-20 flex flex-row items-center gap-x-2'>
            <p>Sort By</p> <img className='w-6' src={funnel} alt="" />
        </div>

        <div className='pt-10 grid grid-cols-4 gap-6 mx-12'>
            {
                All_Products.map((item, i) => {
                    if(props.category === item.category)
                    {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.oldPrice} new_price={item.newPrice}/>

                    }
                    else
                    {
                        return null;
                    }
                })
            }
        </div>

            <div className='flex flex-row items-center justify-center'>
            <button className='border-2 text-[#263238] px-8 py-4 m-20 rounded-full border-blue-600 hover:border-[#263238] hover:text-blue-600'>
                Explore More
                </button>
            </div>
        
        </>
    )
}
