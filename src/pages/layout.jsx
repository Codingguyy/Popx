import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { UserPlus } from "lucide-react";
import { LogIn } from "lucide-react";
import { User } from "lucide-react";
export default function Layout() {
  const [value,setvlue]=useState(0)
  const navigate=useNavigate()
  const iconarray=[{icon:Home,title:"Home",link:"/"},{icon:LogIn,title:"Login",link:"/login"},{icon:UserPlus,title:"Sign up",link:"/create_account"},{icon:User,title:"profile",link:"/profile"}]
  const Currenticon=iconarray[value].icon
  const currentlink=iconarray[value].link
  function handlenavigate(valuee){
    if(valuee==="left"){
       if(value===0){
        setvlue(3)
       }
       else{
        setvlue(v=>v-1)
       }
    }
    if(valuee==="right"){
      if(value===3){
        setvlue(0)
      }
      else{
        setvlue(v=>v+1)
      }
    }
  }
  useEffect(()=>{
    navigate(currentlink)
    console.log("triggering")
  },[value])
  console.log(value)
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-[375px] h-[812px] bg-white shadow-xl rounded-[30px] overflow-hidden border">
        <Outlet context={{setvlue}}/>
      </div>
      <div className="absolute w-[207px] h-[53px] top-[53%] left-[73%] flex items-center justify-start rounded-md shadow-md bg-white">
        <div className="absolute w-[149px] h-[33px] top-[-45%] left-[14%] flex items-center justify-center rounded-md bg-white" style={{fontFamily:"'Robotomono',monospace"}}>{iconarray[value].title}</div>
        <Currenticon size={33} color="black" className="ml-[23px]"/>
        <ChevronLeft size={23} color="gray" className="ml-[63px]" onClick={(e)=>{e.stopPropagation();handlenavigate("left")}}/>
        <ChevronRight size={23} color="gray" className="ml-[11px]" onClick={(e)=>{e.stopPropagation();handlenavigate("right")}}/>
      </div>
    </div>
  );
}