import React from "react"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Features from "../components/features"
import Services from "../components/services"
import Testimonials from "../components/testimonials"
import Footerctc from "../components/footerctc"
export default function Home(){
    return(
        <div className="relative w-full flex flex-col items-center overflow-x-hidden">
            <div className="absolute z-[1001] md:top-[9%] md:left-[1%] lg:left-[1%] lg:top-[10%] pointer-events-none hidden md:block">
<svg
  width="60"
  height="300"
  viewBox="0 0 60 300"
  fill="none"
>
  <path
    d="M 30 0 C 60 25, 60 50, 30 75 C 0 100, 0 125, 30 150 C 60 175, 60 200, 30 225 C 0 250, 0 275, 30 300"
    stroke="#FF4D3D"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  />
</svg>

<svg
  className="absolute top-[20px] left-[50px]"
  width="60"
  height="240"
  viewBox="0 0 60 240"
  fill="none"
>
  <path
    d="M 30 0 C 60 20, 60 40, 30 60 C 0 80, 0 100, 30 120 C 60 140, 60 160, 30 180 C 0 200, 0 220, 30 240"
    stroke="#FF4D3D"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
  />
</svg>
</div>
            <Navbar/>
            <Hero/>
            <Features/>
            <Services/>
            <Testimonials/>
            <Footerctc/>
        </div>
    )
}
