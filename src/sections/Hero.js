import React from 'react'
import heroImg from '../assets/icons/Price Icon/hero.png'

function Hero() {
    return (
        <section id='home' className='flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 lg:h-screen'>
            <div className='flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20'>
                <h1 className='text-blue-500 font-bold text-6xl'>One-click solution for your static website </h1>
                <p className='text-slate-90 text-2xl'>Lorem Ipsum is a standard dummy text used in printing and web design.
                    Learn about its origin, variations, translations and how to generate it online.</p>
                <div className='flex justify-center items-center gap-7'>
                    <button className='bg-blue-500 text-white px-4 py-3 lg:px-8 rounded-md text-[18px] hover:bg-black
            hover:text-white  cursor-pointer'>View More</button>
                    <button className='border-2 border-blue-800 text-blue-500 bg-white text-[18px] rounded-md px-4 py-3 hover:bg-black hover:text-white
            lg:px-8'>Watch Video</button>
                </div>
            </div>
            <div className='flex justify-center items-center w-1/2 px-5 py-20 object-cover'>
            <img src={heroImg} width={500} height={500} />
            
            </div>

        </section>
    )
}

export default Hero