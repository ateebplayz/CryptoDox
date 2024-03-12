'use client'
import React from 'react'
import '../app/globals.css'
import { courseUri } from '@/data'

function HeroSubPage() {
  return (
    <div className='lgo:min-h-screen w-full flex flex-row text-black px-32 lg:px-8 lg:mb-12'>
      <div className='flex w-full justify-start lgo:min-h-screen items-center pt-16 lg:pt-6 flex-col'>
        <h1 className='text-4xl font-raleway font-bold text-slate-800 text-center'>Here&lsquo;s how <span className='text-primary'>I</span> might be able to <span className='text-primary underline'>Help</span> you:</h1>
        <iframe className='w-full mt-16 h-[600px] lg:h-[175px] rounded-xl border-4 border-primary ' src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <div className='flex justify-between items-center flex-row w-full'>
          <button onClick={()=>{window.open(courseUri)}} className='w-full animate-button hover:animate-none mr-4 mt-16 mb-8 lg:mb-0 bg-primary p-6 lg:mb-0 border-2 border-primary rounded-xl transition duration-300 hover:bg-secondary hover:border-secondary lg:mr-0'><h1 className='text-white font-raleway font-bold text-3xl'>Join Now</h1></button>
        </div>
      </div>
    </div>
  )
}

export default HeroSubPage