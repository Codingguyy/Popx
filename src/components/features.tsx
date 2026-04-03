import Featuresavatar from "../assets/featuresavatar"
import {motion} from 'framer-motion'
export default function FeaturesSection() {
  return (
    <section className="relative bg-white sm:py-20 md:py-12 lg:py-28">
      <Featuresavatar/>
      {<div className="hidden absolute md:block md:top-[7%] md:right-[33%] lg:right-[35%] lg:top-[17%]"
  style={{
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,32,32,0.4) 0%, rgba(255,32,32,0.1) 50%, rgba(255,32,32,0) 70%)',
    filter: 'blur(40px)',
    pointerEvents: 'none',
  }}
/>}
      <svg
  className="hidden absolute w-[45%] md:block md:w-[73%] md:top-[47%] md:right-[-4.7%] lg:w-[67%] lg:right-[-3.9%] lg:top-[46%] pointer-events-none"
  viewBox="0 0 300 200"
  fill="none"
  style={{
    transform: 'rotate(35deg)',
    transformOrigin: 'bottom right',
    filter: 'drop-shadow(0px 8px 2px rgba(0,0,0,1))'
  }}
>
  <path
    d="M 0 200 C -20 140, 120 170, 80 100 C 40 30, 180 60, 150 0 C 130 -30, 280 10, 300 -20"
    stroke="#FF4D3D"
    strokeWidth="1.2"
    fill="none"
    strokeLinecap="round"
  />
</svg>

      
      <div className="relative max-w-[1440px] mx-auto px-6 sm:py-28 md:px-12 lg:px-20 py-16 md:py-20 lg:py-36">
        <svg
  className="hidden absolute z-[998] w-12 h-12 md:block md:w-16 md:h-16 md:right-[5.7%] md:top-[27%] lg:w-20 lg:h-20 lg:right-[3.7%] lg:top-[32%] pointer-events-none"
  viewBox="0 0 40 40"
  fill="none"
  style={{ transform: 'rotate(15deg)' }}
>
  <rect width="40" height="40" fill="#FF4D3D" />
</svg>
        <div className="w-full md:w-[45%] lg:w-[38%] flex flex-col items-start gap-5">
          <motion.h2
          initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:text-3xl text-xl md:text-xl text-gray-900 leading-tight text-left"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            Tomorrow should<br />
            be better than today
          </motion.h2>

          <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5,ease:"easeOut",delay:0.6}}
            className="text-xs text-gray-500 leading-relaxed text-left break-words"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            We are a team of strategists, designer communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </motion.p>

          <a
            href="#"
            className="text-xs text-gray-800 font-medium text-left flex items-center gap-2 hover:gap-4 transition-all duration-200"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            Read more <span>——</span>
          </a>

        </div>
      </div>

      
      <div className="relative max-w-[1440px] mx-auto px-6 sm:py-44 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
        <svg
  className="hidden absolute  z-[1000] w-10 h-10 md:block md:w-16 md:h-16 md:left-[28%] md:bottom-[14%] lg:w-20 lg:h-20 lg:bottom-[16%] lg:left-[21%] pointer-events-none"
  viewBox="0 0 50 50"
  fill="none"
>
  <polygon points="0,50 50,50 25,0" fill="#FF4D3D" />
</svg>
<svg
  className="hidden absolute z-[998] w-10 h-10 md:w-16 md:block md:h-16 lg:w-20 lg:h-20  md:bottom-[57%] md:left-[7%] lg:bottom-[51%] lg:left-[6.7%] pointer-events-none"
  viewBox="0 0 50 50"
  fill="none"
>
  <polygon points="0,50 50,50 25,0" fill="#FF4D3D" />
</svg>
        <div className="w-full md:w-[45%] lg:w-[38%] flex flex-col items-start gap-5 md:ml-auto">

          <motion.h2
          initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:text-3xl text-xl text-gray-900 leading-tight text-left"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            See how we can<br />
            help you progress
          </motion.h2>

          <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5,ease:"easeOut",delay:0.6}}
            className="text-xs text-gray-500 leading-relaxed text-left break-words"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            We add a layer of business insights and action that
            allows change makers to accelerate their progress in
            areas such as brand, design, digital, comms and
            social research.
          </motion.p>

          <a
            href="#"
            className="text-xs text-gray-800 font-medium text-left flex items-center gap-2 hover:gap-4 transition-all duration-200"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            Read more <span>——</span>
          </a>

        </div>
      </div>

    </section>
  )
}
