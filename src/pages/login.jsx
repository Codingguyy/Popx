import { Link } from "react-router-dom"
import { useOutletContext } from "react-router-dom";
export default function Login(){
    const {setvlue}=useOutletContext()
    return(
        <div className="relative h-full w-full flex flex-col items-start bg-[#F7F8F9] bg-no-repeat bg-[0%_0%] bg-clip-padding opacity-100">
            <div className="absolute w-[188px] h-[69px] top-[40px] left-[20px] text-left text-[28px] leading-[36px] font-medium font-rubik text-[#1D2226]">Signin to your PopX account</div>
            <p className="absolute w-[252px] h-[48px] top-[123px] left-[20px] text-left text-[18px] leading-[26px] font-normal font-rubik text-[#1D2226] opacity-60 tracking-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <div className="absolute w-[335px] h-[40px] top-[204px] left-[20px] border border-[1px] border border-[#CBCBCB] rounded-[6px]"></div>
            <div className="absolute w-[97px] h-[15px] whitespace-nowrap top-[195px] left-[32px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF] bg-[#F7F8F9] tracking-normal"><span className="ml-[2px]">Email Address</span></div>
            <span className="absolute top-[216px] left-[36px] whitespace-nowarp w-[201px] h-[17px] text-left text-[14px] leading-[17px] font-normal font-rubik text-[#919191]">Enter email address</span>
            <div className="absolute w-[335px] h-[40px] top-[267px] left-[20px] border border-[1px] border border-[#CBCBCB] rounded-[6px]"></div>
            <div className="absolute top-[258px] left-[32px] w-[97px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF] bg-[#F7F8F9]">
                <span className="ml-[2px]">Password</span>
            </div>
            <span className="absolute top-[279px] left-[36px] whitespace-nowarp w-[201px] h-[17px] text-left text-[14px] leading-[17px] font-normal font-rubik text-[#919191]">Enter password</span>
            <button className="absolute w-[335px] h-[46px] top-[321px] left-[20px] rounded-[6px] bg-[#CBCBCB]"></button>
            <Link to="/profile" onClick={(e)=>{e.stopPropagation();setvlue(3)}}><span className="absolute top-[335px] left-[167px] h-[19px] w-[42px] text-center text-[16px] leading-[17px] font-medium font-rubik text-white">Login</span></Link>
        </div>
    )
}