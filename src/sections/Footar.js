import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

function Footar() {
  return (
    <section className='w-full bg-black text-white flex lg:flex-raw justify-between  items-start gap-10 px-10 py-14 lg:px-20 lg:py-28'>
      <div className='flex flex-col justify-center gap-2 w-full lg:w-[40%]'>
        <h1 className='text-blue-600 font-bold text-4xl'>Top Briefing</h1>
        <p className='text-lg text-slate-200 '>Lorem Ipsum is a dummy text that fills spaces in web design, printing and publishing. Learn its origin, meaning and how to customize it with HTML elements and keywords.</p>
        <div className='flex  items-center gap-4 mt-7 ' id='logos'>
          <span className='p-2 rounded-full cursor-pointer hover:bg-blue-600 '><BsFacebook size={30} /></span>
          <span className='p-2 rounded-full cursor-pointer hover:bg-blue-600 '><BsInstagram size={30} /></span>
          <span className='p-2 rounded-full cursor-pointer hover:bg-blue-600 '><BsYoutube size={30} /></span>
          <span className='p-2 rounded-full cursor-pointer hover:bg-blue-600 '><BsTwitterX size={30} /></span>

        </div>
      </div>
      <div className='flex flex-row gap-20'>  
           <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%] lg:flex-row'>
        <ul className='flex flex-col justify-center items-start gap-3 '>
        <h1 className='text-xl font-semibold'>PAGES</h1>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Home</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Services</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>TopBriefing</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Price</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Contact</li>
        </ul>
      </div>
      <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]'>
        <ul className='flex flex-col justify-center items-start gap-3 '>
        <h1 className='text-xl font-semibold'>PAGES</h1>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Home</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Services</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>TopBriefing</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Price</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Contact</li>
        </ul>
      </div>

      <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]'>
        <ul className='flex flex-col justify-center items-start gap-3 '>
        <h1 className='text-xl font-semibold'>PAGES</h1>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Home</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Services</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>TopBriefing</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Price</li>
        <li className='text-slate-300 cursor-pointer hover:text-blue-600'>Contact</li>
        </ul>
      </div>
      </div>
 
    
      
      
    </section>
  )
}

export default Footar