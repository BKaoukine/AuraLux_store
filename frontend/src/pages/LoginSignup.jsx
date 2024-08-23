import React from 'react'

export const LoginSignup = () => {
  return (
    <div className='flex flex-col items-center py-10 px-5 border-t-2 border-x-2 border-dotted mx-auto my-[15vh]  border-gray-400 w-[500px] gap-y-4'>
        <h1 className='font-light text-xl text-black'>Sign up to <span className='uppercase font-semibold'>auralux</span> for free</h1>
        <div className='flex items-center justify-center py-4 px-8 bg-gray-100 w-[400px] mb-6'>
            <h2 className='text-gray-500'>Already have an account?  <span className='text-blue-600'>Sign in</span></h2>
        </div>

        <div className='space-y-4'>
            <input className='flex items-center py-4 px-6 bg-gray-100 w-[400px]' type="text" placeholder='Your name'  />
            <input className='flex items-center py-4 px-6 bg-gray-100 w-[400px]' type="email" placeholder='Email Address' />
            <input className='flex items-center py-4 px-6 bg-gray-100 w-[400px]' type="password" placeholder='Password' />
            <button className='flex items-center text-white justify-center py-4 px-6 bg-blue-600 w-[400px]' >Create account</button>
        </div>
        <p className='text-gray-500'>
            By creating an account, you agree to the <br/>
            <span className='text-blue-600' >Terms & Conditions</span> and <span className='text-blue-600' >Privacy Policy</span>
        </p>
    </div>
  )
}
