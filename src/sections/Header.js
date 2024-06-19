import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";



function Header() {
  const [toggle, setToggle] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [menuClass, setMenuClass] = useState('');

  const toggleMenu = () => {
    setToggle(!toggle);
  }

  const toggleIcon = () => {
    setIconToggle(!iconToggle);
  }

  useEffect(() => {
    setMenuClass(toggle ? 'transition-opacity ease-in-out duration-300 transform transalte-y-0 opacity-100' : 'transition-opacity ease-in-out duration-300  transform transalte-y-full opacity-100 ');
  }, [toggle])
  return (
    <section className='w-full bg-black text-white px-8 py-5 lg:px-16 top-0  z-40 sticky'>
      <div className= ' flex justify-between items-center'>
        <div className=''>
          <h1 className='text-blue-600 text-3xl font-bold items-center'>TopBriefing</h1>
          </div>
          <div className='hodden lg:flex justify-end items-center gap-2'>
            <ul className='flex justify-center items-center gap-3 '>
              <li><a className='text-lg cursor-pointer text-slate-100 rounded-sm px-5 py-2 hover:bg-blue-600 active:text-white hover:text-white' href='#home'>Home</a></li>
              <li><a className='text-lg cursor-pointer text-slate-100 rounded-sm px-5 py-2 hover:bg-blue-600 active:text-white hover:text-white' href='#service'>Service</a></li>
              <li><a className='text-lg cursor-pointer text-slate-100 rounded-sm px-5 py-2 hover:bg-blue-600 active:text-white hover:text-white' href='#topbriefing'>TopBriefing</a></li>
              <li><a className='text-lg cursor-pointer text-slate-100 rounded-sm px-5 py-2 hover:bg-blue-600 active:text-white hover:text-white' href='#price'>Price</a></li>
              <li><a className='text-lg cursor-pointer text-slate-100 rounded-sm px-5 py-2 hover:bg-blue-600 active:text-white hover:text-white' href='#contact'>Contact</a></li>
            </ul>
        </div>
      </div>
      <div className='flex lg:hidden flex-col'>
        {iconToggle ? (
          <AiOutlineClose size={50} className='font-bold ' onClick={() => { toggleMenu(); toggleIcon() }} />
        ) :
          (<AiOutlineMenu size={50} onClick={() => { toggleMenu(); toggleIcon() }} />
          )}

        {toggle && (
          <div id='mob-menu' className={`bg-blue-500 text-white absolute top-28  right-0 w-full ${menuClass}`}>
            <ul className='text-xl border-b  border-gray-600 text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Home</ul>
            <ul className='text-xl border-b border-gray-600 text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Service</ul>
            <ul className='text-xl border-b border-gray-600 text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>TopBriefing</ul>
            <ul className='text-xl border-b border-gray-600 text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Price</ul>
            <ul className='text-xl text-white font-semibold hover:bg-blue-600 hover:text-white w-full py-3 text-center'>Contact</ul>
          </div>

        )}
      </div>
    </section>
  )
}

export default Header