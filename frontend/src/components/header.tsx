import React from 'react'
import '../app/globals.css'
import logo from '../assets/logo.png'
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa'

function Header() {
  return (
    <div className='pt-8 fixed left-0 right-0 top-0 flex justify-center items-center z-10'>
        <div className='text-white w-11/12 p-4 rounded-full border-primary border-2 flex justify-between z-20'>
            <div className='flex justify-start items-center flex-row'>
                <img src={logo.src} width={48} className='rounded-full border-2 border-primary'></img>
            </div>
            <div className='flex justify-end items-center flex-row'>
                <FaDiscord size={24} className='mr-4 z-10 text-primary transition duration-500 hover:text-primary cursor-pointer'/>
                <FaInstagram size={24} className='mr-4 text-primary transition duration-500 hover:text-primary cursor-pointer'/>
                <FaYoutube size={24} className='mr-4 text-primary transition duration-500 hover:text-primary cursor-pointer'/>
                <button className='bg-primary h-full rounded-full font-bold px-8 transition duration-500 hover:opacity-50 active:scale-90'>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Header
