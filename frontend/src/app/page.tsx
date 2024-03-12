'use client'
import ContextSubPage from "@/components/context";
import Header from "@/components/header";
import HeroSubPage from "@/components/hero";
import WhySubPage from "@/components/why";
import React from "react";
import { FaAngleUp } from 'react-icons/fa'

export default function Home() {
  const homeRef = React.useRef<HTMLDivElement>(null)
  const handleScrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="col font-raleway bg-white">
      <div ref={homeRef}/>
        <div className="fixed bottom-0 right-0 pr-4 pb-4 lg:pr-2 lg:pb-2 z-50">
          <div onClick={handleScrollToHome} className="bg-primary text-white border-2 border-white rounded-full p-2 transition duration-500 hover:scale-110 cursor-pointer active:scale-90">
            <FaAngleUp className="w-[32px] h-[32px] lg:w-[20px] lg:h-[20px]"/>
          </div>
        </div>
      <Header/>
      <HeroSubPage/>
      <WhySubPage/>
      <ContextSubPage/>
    </div>
  );
}
