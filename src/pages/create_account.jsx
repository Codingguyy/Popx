import { Link } from "react-router-dom"
import { useOutletContext } from "react-router-dom";
export default function Create_account(){
    const {setvlue}=useOutletContext()
    return(
        <div className="relative h-full w-full flex flex-col bg-[#F7F8F9]">
            <div className="absolute top-[40px] left-[20px] w-[188px] h-[69px] text-left text-[28px] leading-[36px] font-medium font-rubik text-[#1D2226]">Create your PopX account</div>
            <div className="absolute top-[140px] left-[20px] w-[335px] h-[40px] border border-[1px] border border-[#CBCBCB] rounded-[6px]"></div>
            <span className="absolute top-[131px] left-[32px] h-[15px] w-[97px] text-left text-[13px] leading-[17px] font-normal tracking-normal font-rubik text-[#6C25FF] bg-[#F7F8F9]"><span className="ml-[2px]">Full Name</span><span className="text-[#DD4A3D]">*</span></span>
            <span className="absolute top-[155px] left-[37px] h-[12px] w-[95px] whitespace-nowrap text-left flex items-center font-rubik text-[#1D2226]">Marry Doe</span>
            <div className="absolute top-[209px] left-[20px] w-[335px] h-[40px] border border-[1px] border border-[#CBCBCB] rounded-[6px]"></div>
            <span className="absolute top-[200px] left-[32px] h-[15px] whitespace-nowrap w-[97px] text-left text-[13px] leading-[17px] font-normal tracking-normal font-rubik text-[#6C25FF] bg-[#F7F8F9]"><span className="ml-[2px]">Phone Number</span><span className="text-[#DD4A3D]">*</span></span>
            <span className="absolute top-[224px] left-[37px] h-[12px] w-[95px] whitespace-nowrap text-left flex items-center font-rubik text-[#1D2226]">Marry Doe</span>
            <div className="absolute top-[278px] left-[20px] w-[335px] h-[40px] border border-[1px] border border-[#CBCBCB] rounded-[6px]"></div>
            <span className="absolute top-[269px] left-[32px] h-[15px] whitespace-nowrap w-[97px] text-left text-[13px] leading-[17px] font-normal tracking-normal font-rubik text-[#6C25FF] bg-[#F7F8F9]"><span className="ml-[2px]">Email address</span><span className="text-[#DD4A3D]">*</span></span>
            <span className="absolute top-[293px] left-[37px] h-[12px] w-[95px] whitespace-nowrap text-left flex items-center font-rubik text-[#1D2226]">Marry Doe</span>
            <div className="absolute top-[347px] left-[20px] w-[335px] h-[40px] border border-[1px] border border-[#CBCBCB] rounded-[6px]"></div>
            <span className="absolute top-[338px] left-[32px] h-[15px] whitespace-nowrap w-[97px] text-left text-[13px] leading-[17px] font-normal tracking-normal font-rubik text-[#6C25FF] bg-[#F7F8F9]"><span className="ml-[2px]">Password</span><span className="text-[#DD4A3D]">*</span></span>
            <span className="absolute top-[362px] left-[37px] h-[12px] w-[95px] whitespace-nowrap text-left flex items-center font-rubik text-[#1D2226]">Marry Doe</span>
            <div className="absolute top-[416px] left-[20px] w-[335px] h-[40px] border border-[1px] border border-[#CBCBCB] rounded-[6px]"></div>
            <span className="absolute top-[407px] left-[32px] h-[15px] whitespace-nowrap w-[97px] text-left text-[13px] leading-[17px] font-normal tracking-normal font-rubik text-[#6C25FF] bg-[#F7F8F9]"><span className="ml-[2px]">Company name</span></span>
            <span className="absolute top-[431px] left-[37px] h-[12px] w-[95px] whitespace-nowrap text-left flex items-center font-rubik text-[#1D2226]">Marry Doe</span>
            <span className="absolute w-[125px] h-[15px] top-[474px] whitespace-nowrap left-[20px] text-left leading-[17px] text-[13px] font-normal leading-normal font-rubik"><span className="text-[#1D2226]">Are u an Agency?</span><span className="text-[#DD4A3D]">*</span></span>
            <span className="absolute h-[22px] w-[22px] top-[499px] left-[20px] border border-[1px] border border-[#642AF5] rounded-full"></span>
            <span className="absolute h-[12px] w-[12px] top-[504px] left-[25px] rounded-full bg-[#6C25FF]"></span>
            <span className="absolute h-[22px] w-[22px] top-[499px] left-[100px] border border-[1px] border border-[#919191] rounded-full"></span>
            <span className="absolute h-[17px] w-[18px] top-[502px] left-[134px] text-left text-[14px] leading-[17px] text-[#1D2226] font-normal font-rubik">No</span>
            <button className="absolute h-[46px] w-[335px] top-[736px] left-[20px] rounded-[6px] bg-[#6C25FF]"></button>
            <Link to="/profile" onClick={(e)=>{e.stopPropagation();setvlue(2)}}><span className="absolute w-[120px] h-[19px] top-[750px] left-[128px] text-left text-[16px] leading-[17px] font-medium tracking-normal text-[#FFFFFF]">Create Account</span></Link>
        </div>
    )
}