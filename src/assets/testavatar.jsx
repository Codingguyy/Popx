import Avatar from './0be3546621a0c82f467a1065092444bbcf328c11.png'
import Avatar1 from './9fafd71fcaf807d27868bc021bfd2b706ca4a104.png'
import Avatar2 from './a3b22f9c9d55d92d7b1b04f8c72abda291bb5ff2.png'
import Avatar3 from './e1510bf92e503b24bd6f16dfd4f7bd4643d7dff7.png'
import Avatar4 from './42ecea29e6da48d7cf7986754edad6a520cf49bc.png'
import Avatar5 from './0c27648bdc88f3209ccfbcc5d9b9d169cf99426c.png'
import Avatar6 from './b73f7d3f3f97b55b8691134f55142949dcc75229.png'
import Avatar7 from './0c27648bdc88f3209ccfbcc5d9b9d169cf99426c.png'
import Avatarcomponent from '../components/avatar'
export default function Avatarr(){
    const avatars=[
        {avatar:Avatar,className:'hidden absolute w-[80px] h-[80px] sm:block top-[35.7%]  md:left-[7.5%]'},
        {avatar:Avatar1,className:'hidden absolute w-[52px] h-[52px]  sm:block sm:top-[67%]  md:top-[53%] md:left-[2.3%]'},
        {avatar:Avatar2,className:'hidden absolute w-[117px] h-[117px] top-[55%] md:block md:left-[12%]'},
        {avatar:Avatar3,className:'hidden absolute w-[80px] h-[80px] top-[67%] md:block md:left-[1%]'},
        {avatar:Avatar4,className:'hidden absolute w-[90px] h-[90px] top-[35.5%] md:block md:left-[87%]'},
        {avatar:Avatar5,className:'hidden absolute w-[65px] h-[65px] top-[43.3%] md:block md:left-[78%]'},
        {avatar:Avatar6,className:'hidden absolute w-[75px] h-[75px] top-[54%] md:block md:left-[74%] lg:left-[79%]'},
        {avatar:Avatar7,className:'hidden absolute w-[143px] h-[143px] sm:block sm:left-[75%] sm:top-[57%]  md:top-[63%] md:left-[80%] lg:left-[85%]'},
    ]
    return(
        <>{avatars.map((data,id)=><Avatarcomponent key={id} src={data.avatar} alt={"an image"} className={data.className}/>)}</>
    )
}