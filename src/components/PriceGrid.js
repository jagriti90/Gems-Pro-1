import React from 'react'
import { pricing } from '../exports'

function PriceGrid({plan, price, label, about} ) {
  return (
    <div className='flex flex-col justify-center items-start bg-white p-6 sm:p-8 lg:p-10 rounded-xl gap-4 sm:gap-6 lg:gap-8 border-2 lg:border-3 border-blue-800'>
      <h1 className='text-blue-400 text-2xl sm:text-3xl'>{plan}</h1>
      <h1 className='text-blue-500 text-3xl sm:text-4xl font-bold'>{price}</h1>
      <p className='bg-blue-800 text-white px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base hover:bg-black hover:text-white cursor-pointer'>
        {label}
      </p>
      <p className='text-slate-800 text-base sm:text-xl'>{about}</p>
    </div>
  )
}

export default PriceGrid