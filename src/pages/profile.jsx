import Humanimage from '../../images/humanimage.png'
import Cameraimage from '../../images/cameraimage.png'
export default function Profile(){
    return(
        <div className="relative h-full w-full flex flex-col items-center justify-start px-2">
            <div className="h-[68px] w-[375px] bg-[#FFFFFF] shadow-[0px_3px_6px_#00000007]"></div>
            <span className="absolute h-[22px] w-[146px] top-[27px] left-[15px] text-left text-[18px] text-[#1D2226] leading-[21px] font-normal tracking-normal capitalize">Account Settings</span>
            <img src={Humanimage} alt="an image" className="absolute h-[76px] w-[76px] top-[98px] left-[20px] rounded-full"/>
            <img src={Cameraimage} alt="An image" className="absolute w-[21px] h-[23px] top-[147px] left-[79px] bg-transparent"/>
            <span className="absolute top-[98px] left-[116px] w-[73px] h-[18px] text-left text-[15px] leading-[19px] font-medium font-rubik text-[#1D2226] capitalize">Marry Doe</span>
            <span className="absolute top-[122px] left-[116px] w-[118px] h-[17px] text-left text-[14px] leading-[19px] font-normal font-rubik text-[#1D2226] capitalize">Marry@Gmail.Com</span>
            <div className="absolute top-[204px] left-[20px] w-[347px] h-[63px] text-left text-[14px] leading-[22px] font-normal font-rubik text-[#1D2226] capitalize tracking-tight">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>
            <div className="absolute top-[288px] w-full h-[1px] bg-[repeating-linear-gradient(to_right,#CFCFCF_0px,#CFCFCF_4px,transparent_4px,transparent_7.5px)]"></div>
        </div>
    )
}