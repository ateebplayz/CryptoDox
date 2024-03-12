'use client'
import React from 'react'
import { FaTelegram, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import logo from '../assets/logo.png'
import { courseUri } from '@/data'

function Header() {
  return (
    <div className='w-screen grid grid-cols-3 gap-4 items-center pt-4 bg-white text-primary p-3 md:flex md:justify-center md:items-center'>
        <div className='flex flex-row justify-start items-center h-full col-span-1 md:hidden'>
        </div>
        <div className='flex flex-col justify-center items-center h-full col-span-1'>
            <img alt="image"src={logo.src} height={48} width={48} className='rounded-full border-2 border-orimary'/>
            <div className='flex flex-row justify-end items-center h-full col-span-1 mt-4'>
                <FaTelegram onClick={()=>{window.open('https://t.me/ecptrds')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
                <FaInstagram onClick={()=>{window.open('https://instagram.com/ecptrades')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
                <FaXTwitter onClick={()=>{window.open('https://x.com/ecptrds')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
                <FaYoutube onClick={()=>{window.open('https://www.youtube.com/@ecptrds')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
                <FaTiktok onClick={()=>{window.open('https://tiktok.com/@ecptrades')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
            </div>
            <button onClick={()=>{window.open(courseUri)}} className='p-2 px-4 font-raleway mt-4 font-bold rounded-full bg-primary text-white transition duration-300 hover:bg-transparent hover:text-primary hover:scale-110'>Join Now</button>
        </div>
    </div>
  )
}

export default Header
