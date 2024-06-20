import React from 'react'
// import {aboutgrids} from '../exports'
import { BsDatabaseFillCheck } from "react-icons/bs";
// import { BsDatabaseFillCheck } from "react-icons/bs";
// import { AiOutlineGlobal } from "react-icons/ai";
// import { AiOutlineLock } from "react-icons/ai";
// import { BsPcDisplayHorizontal } from "react-icons/bs";

function AboutGrid({icon, heading, text, label}) {
  return (
    <div className='flex justify-center items-center gap-5 flex-col bg-white rounded-lg m-2 p-3 lg:p-7'>
<div className='bg-blue-400 p-6 rounded-full hover:bg-blue-700 cursor-pointer hover:text-white'>
{icon}
</div>
{/* <div className='bg-blue-400 p-3 rounded-full hover:bg-blue-700 cursor-pointer hover:text-white'>
<BsDatabaseFillCheck width={65} height={65}/>
</div> */}
<h1 className='text-2xl text-center text-blue-600 font-semibold  '>{heading}</h1>
<p className='text-[18px] text-center text-slate-700 '>{text}</p>
<p className='bg-blue-800 text-white px-6 py-2 rounded-md  text-[16px] hover:bg-black hover:text-white cursor-pointer'>{label}</p>
    </div>
  )
}

export default AboutGrid