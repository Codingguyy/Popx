import React from 'react'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
export default function Home(){
    const {setvlue}=useOutletContext()
    return(
        <div className="relative flex-1 h-full w-full flex flex-col items-start bg-[#F7F8F9] bg-no-repeat bg-[0%_0%] bg-clip-padding">
            <div className="absolute text-[#1D2226] w-[231px] h-[33px] text-[28px] top-[549px] left-[20px] font-medium font-rubik">Welcome to PopX</div>
            <div className="absolute top-[592px] left-[20px] w-[292px] text-[18px] text-left leading-[26px] font-normal font-rubik text-[#1D2226] opacity-60 break-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
            <button className="absolute min-h-[46px] min-w-[335px] top-[669px] left-[20px] rounded-[8px] flex items-center justify-center text-[#FFFFFF] text-base font-medium font-rubik bg-[#6C25FF]"></button>
            <button className="absolute w-[335px] h-[46px] top-[725px] left-[20px] rounded-[8px] bg-[#6C25FF]/30 bg-no-repeat bg-[0%_0%] bg-clip-padding"></button>
            <Link to="/login" onClick={(e)=>{e.stopPropagation();setvlue(1)}}><span className="z-50 absolute top-[739px] left-[86px] w-[202px] h-[19px] text-center text-[16px] leading-[17px] font-medium font-rubik text-[#1D2226] opacity-100">Already Registered? Login</span></Link>
            <Link to="/create_account" onClick={(e)=>{e.stopPropagation();setvlue(2)}}><span className="absolute top-[683px] left-[127px] w-[120px] h-[19px] text-center text-[16px] leading-[17px] font-medium font-rubik text-white">Create Account</span></Link>
        </div>
    )
}