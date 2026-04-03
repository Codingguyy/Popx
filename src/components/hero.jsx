import React from 'react'
import Heroavatars from '../assets/heroavatars'
export default function Hero(){
    return(
        <section className="mt-32 w-screen flex flex-col items-center relative overflow-hidden bg-white">
            

            <div className="hidden absolute sm:block sm:top-[41%] sm:right-[0%] md:block md:right-[5%] md:top-[35%] lg:right-[9%] lg:top-[31%]"
  style={{
    width: '104px',
    height: '52px',
    borderRadius: '244px 244px 0 0',
    backgroundColor: '#934CEC',
    transform: 'rotate(120deg)',
  }}
/>
            <div className="max-w-8.5xl flex flex-col items-center px-4 md:px-6 md:items-center lg:px-11 lg:items-center">
        <div className="relative inline-block">
  <p
    className="text-center break-words leading-relaxed text-secondary
    text-4xl px-6 sm:px-24
    md:px-0 md:w-[570px] md:text-5xl
    lg:w-[732px] lg:text-6xl"
    style={{ fontFamily: "'Roboto Mono', monospace" }}
  >
    The{" "}
   
    <span className="relative inline-block">
      Thinkers
      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 100 8"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 5 C10 2, 20 7, 30 4 C40 1, 50 6, 60 3 C70 1, 80 6, 90 4 C95 3, 98 5, 100 4"
          stroke="#FFD600"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    {" "}and Doers were{" "}
   
    <span>Ch{""}<span className="bg-[#FFC2EA] rounded-[30px]">anging</span></span>
    {" "}the{" "}
    
    <span className="border-2 bg-[#D7EEDD] rounded-full px-1">
      status
    </span>
    {" "}with quo
    
  </p>
</div>
    <p className="max-w-8.3xl text-center break-words leading-relaxed text-secondary w-[150px] hidden text-sm md:w-[270px] md:block md:text-txs md:tracking-wide md:py-3 lg:w-[440px] lg:text-xxxs lg:tracking-wide lg:py-4">We are a team of strategists, design communicators, researchers. Together, we believe that progress happens when u refuse to play things safe</p>
    </div>
    <div className="relative w-full sm:py-20 md:py-32 lg:py-44">
        <Heroavatars/>
    </div>
</section>
    )
}