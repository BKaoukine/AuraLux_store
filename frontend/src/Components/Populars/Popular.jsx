import React from 'react'
import popularProducts from '../Assets/data'
import { Item } from '../Items/Item'
export const Popular = () => {
  return (
    <div className='w-full flex flex-col pt-10 pl-[20px] pr-[20px]'>
        <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-2xl font-medium text-[#263238] uppercase'>Popular</h1>
            <hr className='bg-blue-600 h-1 w-full' />
        </div>
        <div className='pt-10 grid grid-cols-4 gap-6'>
            {
                popularProducts.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.oldPrice} new_price={item.newPrice}/>
                })
            }
        </div>
    </div>
  )
}
