'use client'
import React from 'react'
import image1 from '../assets/image-1.jpg'
import { courseUri } from '@/data'

function WhySubPage() {
  return (
    <div>
      <div className='bg-white w-full bg-cover flex justify-center items-start flex-row mt-16 lg:mt-0 px-32 lg:px-8 lg:flex-col'>
        <div className='flex justify-start items-start h-full flex-row w-full text-gray-700 lg:flex-col'>
            <div className='flex justify-start items-start flex-row h-full w-1/2 pr-4 flex-col lg:w-full lg:mx-0 lg:px-0'>
                <h1 className='text-[2.5rem] font-raleway border-b-2 border-b-black w-full text-center pb-6'>Why <span className='font-bold text-primary'>Work</span> With <span className='border-b-4 rounded border-b-primary'>Me</span></h1>
                <p className='text-center text-lg mx-4 mt-8 font-raleway lg:text-md'>Back in 2020, when the world seemed uncertain, I took a shot at trading .Fast forward to today, and I&lsquo;ve hit the high six-figure mark. But let&lsquo;s keep it real — it wasn&lsquo;t all smooth sailing. I&lsquo;ve had my share of slips and falls in the market, and trust me, I&lsquo;ve learned from each one.<br/><br/>That&lsquo;s what I bring to the table: real, hard-earned experience. I&lsquo;ve been where you are, staring at a screen, making the tough calls, wanting to quit, not knowing what to do next. But I found a way and like that, I&lsquo;ve taught people just like you to trade, make smart moves, and yes, to actually make money.<br/><br/>I&lsquo;m not about that stiff, corporate talk. I&lsquo;m here to work with you, share what I know, and watch you get to that next level in your trading journey. Because my goal here unlike others,  is to see you succeed and change your life forever.</p>
                <button onClick={()=>{window.open(courseUri)}} className='bg-primary p-3 w-full rounded-xl transition duration-500 hover:bg-secondary mt-8 font-raleway font-bold text-white'>Join Now</button>
            </div>
            <div className='flex justify-center items-center flex-row h-full w-6/12 flex-col lg:w-full lg:mx-0 lg:px-0 lg:mt-10'>
              <img alt="image"src={image1.src} className='w-11/12'/>
              <p className='text-xl lg:text-sm lg:mt-8 mx-8 text-center font-raleway'>
                <span className='font-bold'>Forbes Magazine</span> highlighted the multi seven-figure acquisition of William&lsquo;s e-learning company in 2023
              </p>
            </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1a41f8" fillOpacity="1" d="M0,256L1440,0L1440,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default WhySubPage