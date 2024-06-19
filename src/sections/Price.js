import React from 'react'
// import {tick} from '../assets/icons'
import { pricing } from '../exports'
import PriceGrid from '../components/PriceGrid'
import tick from '../assets/icons/Price Icon/tick.webp'

function Price() {
  return (
    <section id='price' className='flex-col w-full  bg-slate-200 justify-center items-start h-fit px-7 py-14 lg:p-20 gap-5'>
      <h1 className='text-blue-600 font-bold text-6xl'>Pricing Table</h1>
      <div className='flex-col flex mt-4 lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full'>
        <p className='text-slate-950 text-2xl'>Lorem Ipsum is a standard dummy text used in printing and web design.
          Learn about its origin, variations, translations and how to generate it online</p>
        <div className='lg:w-2/4 flex'>
          <ul className='flex flex-col justify-center items-start gap-4 w-full'>
            <li className='flex justify-center items-center gap-4 text-[19px] tex-gray-800'><span className='bg-blue-500
    p-1 rounded-full fill-white'><img src={tick} alt='tick' width={30} height={30} /> </span>Unlimited Pages.</li>
            <li className='flex justify-center items-center gap-4 text-[19px] tex-gray-800'><span className='bg-blue-500
    p-1 rounded-full fill-white'><img src={tick} alt='tick' width={30} height={30} /> </span>Unlimited Pages.</li>
            <li className='flex justify-center items-center gap-4 text-[19px] tex-gray-800'><span className='bg-blue-500
    p-1 rounded-full fill-white '><img src={tick} alt='tick' width={30} height={30} /> </span>Unlimited Pages.</li>
          </ul>
        </div>
        <div className='lg:w-2/4'>
          <ul className='flex flex-col justify-center items-start gap-4 w-full'>
            <li className='flex justify-center items-center gap-4 text-[19px] tex-gray-800'><span className='bg-blue-500
    p-1 rounded-full fill-white'><img src={tick} alt='tick' width={30} height={30} /> </span>Unlimited Pages.</li>
            <li className='flex justify-center items-center gap-4 text-[19px] tex-gray-800'><span className='bg-blue-500
    p-1 rounded-full fill-white'><img src={tick} alt='tick' width={30} height={30} /> </span>Unlimited Pages.</li>
            <li className='flex justify-center items-center gap-4 text-[19px] tex-gray-800'><span className='bg-blue-500
    p-1 rounded-full fill-white'><img src={tick} alt='tick' width={30} height={30} /> </span>Unlimited Pages.</li>
          </ul>
        </div>
      </div>

      <div className='w-full flex justify-around  items-center flex-wrap gap-10 mt-20 '>
{pricing.map((grid)=>(
    <div className=' w-80 ' key={grid.plan}>
      <PriceGrid {...grid} />
    </div>
  ))}
      </div>
    </section>
  )
}

export default Price