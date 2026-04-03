import React from 'react'
import Testavatar from '../assets/testavatar'
export default function Testimonials(){
    return(
        <section className="relative overflow-hidden py-12 md:py-28  lg:py-28">
            <Testavatar/>
           
            <div className="max-w-8.5xl flex flex-col items-center px-4 py-12 sm:px-0 md:px-12 md:py-28 md:space-y-6 lg:px-13 lg:space-y-6 lg:w-[1230px] lg:py-28">
  
  <h1
    className="text-secondary text-center break-words tracking-wide font-medium text-xl sm:w-[65%] md:text-2xl md:w-[77%] lg:text-3xl lg:w-[35%]"
    style={{ fontFamily: "'Roboto Mono', monospace" }}
  >
    
    <span className="bg-[#D7EEDD] rounded-[17px] text-secondary px-1">What</span>
    {" "}our customer says{" "}
    
    <span className="relative inline-block">
      About us
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded" />
    </span>
  </h1>

  
  <div className="relative bg-[#D7EEDD4D] rounded-[27px] px-8 py-6 w-[87%] sm:w-[45%] md:w-[45%]">
   <span
      className="absolute  font-bold leading-none align-bottom text-[26px] left-[3%] top-[7%]sm:text-[34px] sm:left-[5%] sm:top-[13%] md:text-[47px] md:left-[1.7%] md:top-[11%] lg:right-[87%] lg:top-[11%] lg:text-[70px]"
      style={{ fontFamily: "'Georgia', serif", color: '#D1D5DB', letterSpacing: '1px' ,lineheight:0,verticalAlign:'-0.5em'}}
    >
      &#8220;
    </span>
    <span
      className="absolute  font-bold leading-none align-bottom text-[26px] right-[5%] bottom-[5%] sm:text-[34px] sm:right-[7%] sm:top-[77%] md:text-[47px] md:bottom-[5%] md:right-[7.7%] lg:right-[17%] lg:top-[67%] lg:text-[70px]"
      style={{ fontFamily: "'Georgia', serif", color: '#D1D5DB', letterSpacing: '-4px' }}
    >
      &#8221;
    </span>
  <p
    className="text-secondary text-xxs text-center break-words tracking-wider leading-relaxed"
    style={{ fontFamily: "'Roboto Mono', monospace" }}
  >
    
    Elementum delivered the site with inthe timeline as they requested. In the end, the client found the 50% increase in traffic with in days since its launch. They also had an impressive abality use technologies that the company hadnt used, which have also proved to easy to use and reliable

   
    
  </p>

</div>

</div>
        </section>
    )
}
