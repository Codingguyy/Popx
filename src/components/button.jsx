export default function Button({bgcolor,text,width,height,textcolor,borderradius,top,left}){
    return(
        <div className={`min-h-[${height}px] min-w-[${width}px] top-[${top}px] left-[${left}px] rounded-${borderradius} flex items-center justify-center text-[${textcolor}] text-base font-medium font-rubik bg-[${bgcolor}]`}>{text}</div>
    )
}