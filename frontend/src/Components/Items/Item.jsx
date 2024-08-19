import React from 'react'

export const Item = (props) => {
  return (
    <div className='flex flex-col w-full gap-2 p-2 border-2 transition ease-in-out delay-150 hover:scale-105'>
        <img className='w-full h-96' src={props.image} alt="" />
         <hr />
        <h1 className='font-serif font-bold text-xl text-[#263238] '>{props.name}</h1>
           
        <div>
            <ul className='flex flex-row space-x-2'>
                <li className='line-through text-[#b2bec3]'>${props.old_price}</li>
                <li className='text-[#263238] font-black'>${props.new_price}</li>
            </ul>
        </div>
    </div>
  )
}
