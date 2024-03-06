import React from 'react'
import '../app/globals.css'
import heroAsset from '../assets/heroasset.gif'

function HeroSubPage() {
  return (
    <div className='min-h-screen hero-bg bg-cover flex flex-row text-white'>
        <div className='w-full h-full bg-[rgba(26,65,248,0.35)] absolute justify-center items-center flex-row flex'>    
            <div className='w-7/12 flex justify-start items-center pl-24 flex-col lg:p-8 mt-8 md: mt-20 lg:w-full'>
                <h1 className='font-bold font-Poppins text-5xl font-bold text-start w-full md:text-center'>Forex Trading at its <span className='text-primary'>Peak</span>.</h1>
                <p className='mt-6 text-lg font-poppins md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis sollicitudin ornare. In convallis diam semper purus dignissim vehicula. Aenean elementum tempor diam, sit amet aliquam risus venenatis non. In sed euismod dui. Suspendisse id sagittis diam, et cursus erat.</p>
                <div className='flex mt-6 justify-center items-center w-full flex-row lg:flex-col'>
                    <button className='w-1/2 mr-2 bg-primary text-primary font-bold p-2 rounded-full transition duration-500 hover:opacity-50 active:scale-90 active:opacity-100 text-white lg:mx-0 lg:mb-2 lg:w-full'>Join Now</button>
                    <button className='w-1/2 ml-2 border-primary border-2 text-primary font-bold p-2 rounded-full transition duration-500 hover:opacity-50 active:scale-90 active:opacity-100 lg:mx-0 lg:mt-2 lg:w-full'>Get In Touch</button>
                </div>
            </div>
            <div className='w-5/12 flex justify-center items-center lg:hidden'>
                <img src={heroAsset.src} width={heroAsset.width} className='scale-90'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSubPage