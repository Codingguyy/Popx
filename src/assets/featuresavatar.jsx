import Avatar from './3ddf828267cb844171aaad94b1f6da3e7949acbd.png'
import Avatar1 from './da7717ef2f3a21b6e13dc4d9c4b346bc9b5a7682.png'
import Avatarcomponent from '../components/avatar'
export default function Featuresavatar(){
   const avatars=[{avatar:Avatar,className:'hidden z-[999] absolute w-[180px] h-[180px] sm:block sm:bottom-[3%] sm:left-[3%] md:w-[240px] md:h-[240px] md:bottom-[12.7%] md:left-[8.3%] lg:bottom-[16.7%] lg:left-[8.3%]'},{avatar:Avatar1,className:'hidden z-[999] absolute w-[180px] h-[180px] sm:block sm:top-[38%] sm:right-[69%] md:w-[240px] md:h-[240px] md:right-[8.3%] md:top-[14%] lg:top-[21%] lg:right-[8.3%]'}]
   return(
    <>{avatars.map(data=><Avatarcomponent src={data.avatar} alt="an image" className={data.className}/>)}</>
   )
}