import React, { useState } from 'react'
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineHeatMap } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";







function Contact() {
  return (
    <>
      <section id='contact' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center'>
        <div className='flex justify-center items-center w-full lg:3/4 flex-col  lg:flex-row bg-white rounded-lg px-8 py-12  gap-10 z-20'>
          <div className='flex justify-center item-start flex-col gap-4 w-full'>
            <h1 className='text-blue-600 font-bold text-[35px]'>Contact info</h1>
            <div id='phone' className='flex gap-4 text-lg font-semibold text-gray-600'>
              <span className='bg-blue-400 p-3 rounded-full'><BsTelephoneOutbound className='font-bold ' /> </span> +91 867 877 6355 </div>

            <div id='phone' className='flex gap-4 text-lg font-semibold text-gray-600'>
              <span className='bg-blue-400 p-3 rounded-full'><AiOutlineMessage className='font-bold ' /> </span> demomail1633@gmai.com</div>

            <div id='phone' className='flex gap-4 text-lg font-semibold text-gray-600'>
              <span className='bg-blue-400 p-3 h-11 w-11 rounded-full'><AiOutlineHeatMap /> </span> Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, </div>
            <div id='logo' className='flex  items-center gap-4 mt-10'>
              <span className='bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white'><BsFacebook />
              </span>
              <span className='bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white'><BsInstagram />
              </span>
              <span className='bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white '><BsYoutube />
              </span>
              <span className='bg-blue-500 p-3 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white '><BsTwitterX />
              </span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 w-full'>
            <input type='text' placeholder='Enter your name ' className='px-4 py-4 w-full border-2 border-blue-500 rounded-lg text-[18px] focus:outline-none focus:border-blue-600 bg-slate-100' />
            <input type='email' placeholder='Enter your email ' className='px-4 py-4 w-full border-2 border-blue-500 rounded-lg text-[18px] focus:outline-none focus:border-blue-600 bg-slate-100' />
            <textarea placeholder='Enter your message' className='px-4 py-4 w-full border-2 border-blue-500 rounded-lg text-[18px] focus:outline-none focus:border-blue-600 bg-slate-100' name='' id='' cols='30' rows='10' ></textarea>
            <button className='bg-blue-700 text-white px-4 py-3 w-full rounded-lg hover:bg-black cursor-pointed '>SUBMIT</button>
          </div>
        </div>
      </section>
      <img src='http://getwallpapers.com/wallpaper/full/8/1/9/495746.jpg' alt='' className='w-full h-72 absolute top-[3550px] hidden xl:black' />
    </>
  )
}

export default Contact