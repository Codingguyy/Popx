import React from 'react'
import {motion} from 'framer-motion'
export default function Avatar({src,alt,className}){
    return(
        <motion.img
      src={src}
      alt={alt}
      animate={{scale:1,y:[0,-10,0]}}
      transition={{duration:5,repeat:Infinity,ease:"easeOut"}}
      className={`rounded-full object-cover object-top border-2 border-white ${className}`}
    />
    )
}
