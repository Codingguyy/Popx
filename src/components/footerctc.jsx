import React from 'react'
import {motion} from 'framer-motion'
export default function Footerctc(){
    const footerContent=[{title:"Company",content:['Home','Studio','Service','Blog']},{title:"Terms & Polices",content:['Privacy Policy','Terms & Conditions','Explore','Accessibility']},{title:"Follow us",content:['Instagram','LinkedIn','Twitter','Youtube']},{title:"About Us",content:['1498wFluton ste,STE 2D Chicgo,IL,63867','(123) 456789000','info@elementum.com']}]
    return(
        <section className="relative overflow-hidden px-3 md:px-7 md:py-4 lg:py-6 lg:px-12 bg-[#D7EEDD]">
            <svg
  width="244"
  height="244"
  viewBox="0 0 244 244"
  fill="none"
  style={{ transform: 'rotate(-60deg)' }}
  className="hidden absolute md:block md:w-[110px] md:h-[110px] md:left-[81%] lg:w-[150px] lg:h-[150px] lg:left-[85%] lg:top-[190px]"
>
  <path
    d="M 122 122 m -122 0 a 122 122 0 0 1 244 0 Z"
    fill="#934CEC"
  />
</svg>
<svg
  className="hidden absolute top-0 left-[37%] w-2 md:block md:w-4 lg:w-7 pointer-events-none"
  viewBox="0 0 40 120"
  fill="none"
>
  <path
    d="M 28 0 C 35 30, -10 50, 8 110"
    stroke="#FF4D3D"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
  />
  <polyline
    points="1,100 8,112 18,104"
    stroke="#FF4D3D"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

<svg
  className="hidden absolute top-0 left-[43%] w-2 md:block md:w-4 lg:w-7 pointer-events-none"
  viewBox="0 0 40 120"
  fill="none"
>
  <path
    d="M 28 0 C 35 30, -10 50, 8 110"
    stroke="#FF4D3D"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
  />
  <polyline
    points="1,100 8,112 18,104"
    stroke="#FF4D3D"
    strokeWidth="1.5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>     <div className="max-w-9xl w-screen flex flex-col items-center bg-[#D7EEDD]">
                <div className="w-fit flex flex-col items-center justify-start justify-start py-8  md:py-6 lg:py-9">
                    <h1 className="text-secondary break-words text-center text-xl md:text-3xl lg:text-6xl lg:w-[500px]" style={{fontFamily:"'Roboto Mono',monospace"}}>Subscribe to our newsletter</h1>
                    <p className="hidden text-secondary break-words text-xs sm:block md:text-tsx lg:text-xm">To make ur stay more special and even more memoriable</p>
                    <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="text-xs text-white flex items-center justify-center leading-relaxed rounded-[30px] py-2 px-7 mt-5 bg-black lg:text-xm">Subscribe Now</motion.button>
                </div>
                <div className="h-[1px] w-full  my-6 bg-gray-300 md:w-3/4 lg:w-5/6 mx-auto lg:space-y-2"></div>
                <div className="
      w-full
      flex flex-col items-start gap-8 mb-4
      px-6
      sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-6 sm:mb-10 sm:py-6
      md:flex
      md:mb-0
      md:flex-row md:items-start md:justify-evenly md:gap-0 md:px-10 md:py-4  md:ml-8
      lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:px-20 lg:ml-8 lg:py-6
    ">
      {footerContent.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-3 sm:ml-24 md:ml-0"
        >
         <h4
            className="text-sm lg:text-base font-semibold text-gray-900 whitespace-nowrap"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            {data.title}
          </h4>
<div className="w-[120px] break-words flex flex-col items-start gap-2 md:w-[105px] lg:w-[120px]">
            {data.content.map((item, i) => (
              <span
                key={i}
                className="text-xxs text-gray-400 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      ))}
    </div>
     <div className="text-xxs mb-4 text-secondary md:text-tsx md:mt-16 lg:mt-20">@2023 Elementum, All rights reserved</div>
            </div>
        </section>
    )
}
