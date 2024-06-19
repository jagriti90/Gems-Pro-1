import React from 'react'
import {clients} from '../exports'
import ClientGrid from '../components/ClientGrid'

function Top() {
  return (
    <section id='topbriefing' className='w-full flex flex-col gap-5 h-fit p-7 lg:p-20'>
      <p className='text-center text-xl'>TopBriefing</p>
      <h1 className='text-blue-600 font-bold text-6xl text-center leading-[68px]'>What Client Says</h1>
      <p className='text-slate-950 text-2xl text-center'>Lorem Ipsum is a standard dummy text used in printing and web design. Learn about its origin,
        variations, translations and how to generate it online.</p>
<div className='flex justify-center items-center flex-wrap mt-5 gap-6 '>
 {
  clients.map((client)=>(
    <div key={client.name} className=' w-64 ' > 
    <ClientGrid {...client}/>
    </div>
  ))
 }
</div>
    </section>
  )
}

export default Top   