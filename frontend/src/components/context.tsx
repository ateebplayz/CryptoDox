'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image2 from '../assets/image-2.jpg'
import { FaDiscord, FaYoutube, FaInstagram, FaQuoteLeft, FaTelegram, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import image1 from '../assets/image-1.jpg'
import { courseUri } from '@/data'

function ContextSubPage() {
  return (
    <div className='text-white min-h-screen bg-white border-none min-h-screen flex justify-start items-start flex-col'>
      <div className='bg-primary mt-[-1px] px-32 w-full flex justify-center items-center flex-row lg:px-8'>
        <div className='w-1/2 pt-12 flex justify-center items-center h-full flex-col lg:hidden'>  
          <img alt="image"src={image2.src}/>
          <p className='text-xl mx-12 text-center font-raleway mt-6'>
            <span className='font-bold'>Forbes Magazine</span> highlighted the multi seven-figure acquisition of William&lsquo;s e-learning company in 2023
          </p>
        </div>
        <div className='w-1/2 pt-12 pl-8 h-full flex flex-col lg:w-full lg:px-0 lg:mb-8'>
          <h1 className='text-center text-4xl font-raleway font-bold border-b-2 border-b-white pb-4'>What will you learn?</h1>
          <p className='text-center text-lg mx-4 mt-8 font-raleway lg:text-md'>There are many courses out there, making fake promises, showing demo accounts and making you pay an x ammount of money for information you can find online.<br/><br/><span className='font-bold'>Well here this is not the case</span><br/><br/>With me, you will learn from A-Z, what trading is, how to trade, and how to make money alone. You will be provided with more than 20 hours of educational material. But videos can be found everywhere, what makes a difference here is that, you will have 24/7 access to <span className='font-bold'>me</span>. To ask questions, to share trade ideas and whatever you wish.<br/><br/>I will be there for you throughout your whole learning journey and ensure that you actually become profitable. And I won&lsquo;t stop helping you until you become.</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1a41f8" fillOpacity="1" d="M0,256L1440,0L1440,0L0,0Z"></path>
      </svg>
      <h1 className='font-bold text-center w-full text-5xl text-black lg:mt-10 lg:px-8 lg:text-4xl'>My <span className='text-primary'>Current</span> Students</h1>
      <h1 className='text-2xl font-bold font-raleway mb-20 mt-4 w-full text-center text-primary'>Here&lsquo;s what a few have to say</h1>
      <div className='min-h-screen w-full flex justify-center items-start px-32 flex-col lg:px-8'>
        <div className='w-full flex justify-center items-center flex-row lg:flex-col'>
          <div className='w-1/2 flex justify-center items-center flex-col lg:w-full lg:mx-0 lg:px-0'>
            <iframe className='w-full h-[300px] lg:h-[175px] rounded-xl border-4 border-primary' src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:w-full lg:mx-0 lg:px-0 lg:mt-10'>
            <h1 className='text-center text-primary text-2xl mx-4 font-raleway font-bold border-b-2 border-b-white'>Have you tested more than 3 strategies, and blown many accounts?</h1>
            <h1 className='text-xl text-primary text-center mx-4 font-raleway'>If so, meet my student <span className='italic mt-0'>Stergios</span></h1>
            <p className='text-center text-lg mt-4 lg:mt-2 mx-8 font-raleway lg:text-md'>He had this problem. I solved it for him, and he went on to pass more than 5 accounts and receive more than <span className='font-bold'>25,000</span> in payouts in just 4 months. <br/><br/>Even though he had tested many strategies and had experience he went from blowing accounts and wanting to quit. I managed to help him learn my strategy, and successfully to trade it on his own.<br/><br/>How much is &ldquo;not knowing what you don&lsquo;t know&ldquo; costing you?</p>
          </div>
        </div>
        <div className='w-full flex justify-center items-center flex-row mt-32 lg:flex-col lg:mt-16'>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:hidden'>
            <h1 className='text-center text-primary text-2xl mx-4 font-raleway font-bold border-b-2 border-b-white'>Have you passed some accounts by luck, but still don&lsquo;t have a full on strategy?</h1>
            <h1 className='text-xl text-primary text-center mx-4 font-raleway'>If so, meet my student <span className='italic mt-0'>Spyros</span></h1>
            <p className='text-center text-lg mt-4 lg:mt-2 mx-8 font-raleway lg:text-md'>He had this problem. I solved it for him, and he went on to get <span className='font-bold'>$750,000</span> in funded capital and withdraw more than <span className='font-bold'>$28,000</span>.<br/><br/>He had managed to pass funded accounts but luck but couldn&lsquo;t keep them once they were on the live stage, since he was lacking a strategy. By 4.5 months of studying mine, he was able to pass more accounts and make more money than he had ever imagined.<br/><br/>How much is &ldquo;not knowing what you don&lsquo;t know&ldquo; costing you?</p>
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col lg:w-full'>
            <iframe className='w-full h-[300px] lg:h-[175px] rounded-xl border-4 border-primary' src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className='w-full flex justify-center items-center flex-col text-black lgo:hidden lg:flex lg:mt-10'>
            <h1 className='text-center text-primary text-2xl font-raleway font-bold border-b-2 border-b-white pb-4'>Have you passed some accounts by luck, but still don&lsquo;t have a full on strategy?</h1>
            <h1 className='text-xl text-primary text-center mx-4 font-raleway'>If so, meet my student <span className='italic mt-0'>Spyros</span></h1>
            <p className='text-center text-lg mx-4 mt-4 font-raleway'>He had this problem. I solved it for him, and he went on to get <span className='font-bold'>$750,000</span> in funded capital and withdraw more than <span className='font-bold'>$28,000</span>.<br/><br/>He had managed to pass funded accounts but luck but couldn&lsquo;t keep them once they were on the live stage, since he was lacking a strategy. By 4.5 months of studying mine, he was able to pass more accounts and make more money than he had ever imagined.<br/><br/>How much is &ldquo;not knowing what you don&lsquo;t know&ldquo; costing you?</p>
          </div>
        </div>
        <h1 className='font-bold text-center w-full text-5xl text-black mb-24 lg:mt-10 lg:px-8 lg:text-4xl mt-32 lg:mt-16'>Still not <span className='text-primary'>Convinced?</span></h1>
          <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows
          showStatus={false}
          showThumbs={false} className="carousel w-full carousel-center rounded-box mdo:hidden">
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716478842405036/IMG_0102.png?ex=66016686&is=65eef186&hm=73bdb1cb3ca1fe473aa9bdc2373aa34b04d051bff351517d8a45ad35bc676e6b&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div> 
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716485108432996/IMG_0005.png?ex=66016687&is=65eef187&hm=93a8a1dca99f195981a7a198cf75be5f87d1a80f3673321e8e8457d955416209&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div> 
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716485716742145/IMG_0005.png?ex=66016687&is=65eef187&hm=0f37c3a65a47f1c2276da490f5dbd84d3503bb086dbfadbfd221a59725e748eb&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div> 
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716486052413472/Screenshot_20231220_104203.png?ex=66016687&is=65eef187&hm=a638765abc44d1e50c0580d3161474b2283d159141127a7f329588fe9b65e267&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div> 
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716486589022248/IMG_20231218_082322_964.png?ex=66016687&is=65eef187&hm=7241fa7ce844c2627c027bf90392536800a758cd953fbf61164a0d0b6f17016f&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div> 
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716487587266561/Screenshot_20231212_225426.png?ex=66016688&is=65eef188&hm=5ea1b26b66f4ba8f591b6c6739449adaf68df7faf0f8bbd01e6a3f786d072b1b&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div> 
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716487977472090/IMG_0739.png?ex=66016688&is=65eef188&hm=e1363dfd279720241803274dfb4673c94a8fea51851d72b0b2f9445a194946f4&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div>
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716488346697739/IMG_3583.png?ex=66016688&is=65eef188&hm=86841f42782f8d61922e1177d8a13acc897cb6d85aabfb0f43441b35925725b1&=&format=webp&quality=lossless&width=242&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div>
            <div className="carousel-item w-full justify-center items-center">
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716478842405036/IMG_0102.png?ex=66016686&is=65eef186&hm=73bdb1cb3ca1fe473aa9bdc2373aa34b04d051bff351517d8a45ad35bc676e6b&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
            </div>
          </Carousel>
        <div className='w-full flex justify-center items-center flex-row  lg:flex-col md:hidden'>
          <div className='w-1/2 flex justify-center items-center flex-col lg:w-full'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716478842405036/IMG_0102.png?ex=66016686&is=65eef186&hm=73bdb1cb3ca1fe473aa9bdc2373aa34b04d051bff351517d8a45ad35bc676e6b&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:w-full lg:mt-6'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716485108432996/IMG_0005.png?ex=66016687&is=65eef187&hm=93a8a1dca99f195981a7a198cf75be5f87d1a80f3673321e8e8457d955416209&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col lg:w-full lg:mt-6'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716485716742145/IMG_0005.png?ex=66016687&is=65eef187&hm=0f37c3a65a47f1c2276da490f5dbd84d3503bb086dbfadbfd221a59725e748eb&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
        </div>
        <div className='w-full flex justify-center items-center flex-row mt-8 lg:mt-0 lg:flex-col md:hidden'>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:w-full lg:mt-6'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716486052413472/Screenshot_20231220_104203.png?ex=66016687&is=65eef187&hm=a638765abc44d1e50c0580d3161474b2283d159141127a7f329588fe9b65e267&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:w-full lg:mt-6'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716486589022248/IMG_20231218_082322_964.png?ex=66016687&is=65eef187&hm=7241fa7ce844c2627c027bf90392536800a758cd953fbf61164a0d0b6f17016f&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:w-full lg:mt-6'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716487587266561/Screenshot_20231212_225426.png?ex=66016688&is=65eef188&hm=5ea1b26b66f4ba8f591b6c6739449adaf68df7faf0f8bbd01e6a3f786d072b1b&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
        </div>
        <div className='w-full flex justify-center items-center flex-row mt-8 lg:mt-0 lg:flex-col md:hidden'>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:w-full lg:mt-6'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716487977472090/IMG_0739.png?ex=66016688&is=65eef188&hm=e1363dfd279720241803274dfb4673c94a8fea51851d72b0b2f9445a194946f4&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:w-full lg:mt-6'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716488346697739/IMG_3583.png?ex=66016688&is=65eef188&hm=86841f42782f8d61922e1177d8a13acc897cb6d85aabfb0f43441b35925725b1&=&format=webp&quality=lossless&width=242&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
          <div className='w-1/2 flex justify-center items-center flex-col text-black lg:w-full lg:mt-6'>
              <img alt="image"src='https://media.discordapp.net/attachments/1214533245702508584/1216716478842405036/IMG_0102.png?ex=66016686&is=65eef186&hm=73bdb1cb3ca1fe473aa9bdc2373aa34b04d051bff351517d8a45ad35bc676e6b&=&format=webp&quality=lossless&width=230&height=497' className='w-11/12 rounded-xl lg:w-10/12'/>
          </div>
        </div>
      </div>
      <div className='p-32 bg-primary w-full flex justify-start items-center flex-col mt-24 lg:p-8'>
        <div className='flex justify-center items-center flex-col font-raleway'>
          <h1 className='text-6xl text-white font-bold text-center lg:text-3xl lg:mt-6'>What&lsquo;re you waiting for?</h1>
          <button onClick={()=>{window.open(courseUri)}} className='w-full bg-white text-primary rounded-xl p-3 mt-8 font-bold transition duration-300 hover:bg-transparent hover:scale-110 hover:text-white'>Join Now</button>
        </div>
      </div>
      <div className='bg-primary flex justify-center items-center flex-col w-full font-raleway text-xl'>
        <p className='px-8 text-center lg:text-sm'>Copyright CC 2024 ECP Trades. All Rights Reserved</p>
        <div className='flex flex-row justify-center items-center mt-4 mb-12'>
          <FaTelegram onClick={()=>{window.open('https://t.me/ecptrds')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
          <FaInstagram onClick={()=>{window.open('https://instagram.com/ecptrades')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
          <FaXTwitter onClick={()=>{window.open('https://x.com/ecptrds')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
          <FaYoutube onClick={()=>{window.open('https://www.youtube.com/@ecptrds')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
          <FaTiktok onClick={()=>{window.open('https://tiktok.com/@ecptrades')}} size={24} className='mx-2 transition duration-500 hover:scale-110 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default ContextSubPage