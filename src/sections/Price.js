import React from 'react';
import { pricing } from '../exports';
import PriceGrid from '../components/PriceGrid';
import tick from '../assets/icons/Price Icon/tick.webp';

function Price() {
  return (
    <section id='price' className='flex flex-col w-full bg-slate-200 justify-center items-start h-fit px-7 py-14 lg:px-20 lg:py-28 gap-5'>
      <h1 className='text-blue-600 font-bold text-4xl lg:text-6xl'>Pricing Table</h1>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-4'>
        <p className='text-slate-950 text-lg lg:text-2xl'>
          Lorem Ipsum is a standard dummy text used in printing and web design.
          Learn about its origin, variations, translations, and how to generate it online.
        </p>
        <div className='flex flex-col lg:flex-row lg:w-2/4 gap-6 lg:gap-0'>
          <ul className='flex flex-col justify-center items-start gap-4 w-full'>
            <li className='flex justify-center items-center gap-4 text-[19px] text-gray-800'>
              <span className='bg-blue-500 p-1 rounded-full fill-white'>
                <img src={tick} alt='tick' width={30} height={30} />
              </span>
              Unlimited Pages.
            </li>
            <li className='flex justify-center items-center gap-4 text-[19px] text-gray-800'>
              <span className='bg-blue-500 p-1 rounded-full fill-white'>
                <img src={tick} alt='tick' width={30} height={30} />
              </span>
              Unlimited Pages.
            </li>
            <li className='flex justify-center items-center gap-4 text-[19px] text-gray-800'>
              <span className='bg-blue-500 p-1 rounded-full fill-white'>
                <img src={tick} alt='tick' width={30} height={30} />
              </span>
              Unlimited Pages.
            </li>
          </ul>
          <ul className='flex flex-col justify-center items-start gap-4 w-full lg:mt-0'>
            <li className='flex justify-center items-center gap-4 text-[19px] text-gray-800'>
              <span className='bg-blue-500 p-1 rounded-full fill-white'>
                <img src={tick} alt='tick' width={30} height={30} />
              </span>
              Unlimited Pages.
            </li>
            <li className='flex justify-center items-center gap-4 text-[19px] text-gray-800'>
              <span className='bg-blue-500 p-1 rounded-full fill-white'>
                <img src={tick} alt='tick' width={30} height={30} />
              </span>
              Unlimited Pages.
            </li>
            <li className='flex justify-center items-center gap-4 text-[19px] text-gray-800'>
              <span className='bg-blue-500 p-1 rounded-full fill-white'>
                <img src={tick} alt='tick' width={30} height={30} />
              </span>
              Unlimited Pages.
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full flex flex-wrap justify-around items-center gap-10 mt-20'>
        {pricing.map((grid) => (
          <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4' key={grid.plan}>
            <PriceGrid {...grid} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Price;