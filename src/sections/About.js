import React from 'react'
import AboutGrid from '../components/AboutGrid'
import { aboutgrids } from '../exports'

function About() {
    return (
        <div>
            <section id='service' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10   lg:gap-20 
        h-fit px-7 py-4 lg:px-16 lg:py--12'>
                <div className='justify-center flex items-start flex-col gap-8 lg:w-1/2'>
                    <h1 className='text-blue-500 font-bold  text-6xl'>Hosting Solution With Benefits</h1>
                    <p className='text-slae-05 text-2xl '>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts,
                        and discover plugins for your favorite writing, design and blogging tools..</p>
                    <div className='justify-center flex items-center gap-7'>
                        <button className='bg-blue-800   rounded-md text-white hover:bg-black hover:text-white px-4 py-3 lg:px-8 text   -[18px]'>Read More</button>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full lg:w-1/2 flex-wrap'>
                    {aboutgrids.map((grid) => (
                        <div key={grid.label} className='w-full lg:w-1/2'>
                            <AboutGrid {...grid} />
                            </div> 
                            ))}

                        {/* {aboutgrids.map((val, ind)=>
                       {
                        return<AboutGrid
                        // icon = {val.icon}
                        heading ={val.heading}
                        text ={val.text}
                        label ={val.label}
                        />
                       })} */}
                        </div>
            </section>
        </div>
    )
}

export default About