const services = [
  {
    description: "Office of multiple\ninterest content",
    title: "Collaborative & partnership",
  },
  {
    description: "The hangar US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    description: "Delta faucet content\nsocial, digital",
    title: "Piloting digital confidence",
  },
]
import {motion} from 'framer-motion'
export default function ServicesSection() {
  return (
    <section className="relative w-screen overflow-hidden  flex flex-col items-center bg-white py-6 md:py-4 lg:py-8">
    
      <div className="max-w-[1440px] w-[87%] flex flex-col items-start px-6 sm:w-[87%] sm:items-start md:px-12 md:w-[91%] md:items-start  lg:w-[84%] lg:px-6">

        
        <h2
          className="text-left text-xl md:text-3xl lg:text-6xl text-gray-900 leading-tight py-4 md:py-6  lg:py-12"
          style={{ fontFamily: "'Roboto Mono', monospace" }}
        >
          What we{" "}
          <span className="relative bg-[#D7EEDD] rounded-[27px] px-1 inline-block">
            can
          </span>
          <br />
          <span className="relative inline-block">
            offer
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded" />
          </span>{" "}
          you!
        </h2>

        
        <div className="flex flex-col w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-between
                border-t border-gray-200
                py-5 md:py-6 lg:py-7
                last:border-b
                group cursor-pointer"
            >
             
              <p
                className="hidden md:block text-[11px] lg:text-xms text-gray-400 break-words leading-relaxed text-left whitespace-pre-line shrink-0 w-[120px] lg:w-[220px]"
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                {service.description}
              </p>

              
              <motion.p
                className="relative text-sm md:text-lg lg:text-3xl text-gray-900 font-medium break-words text-left flex-1 md:ml-6 lg:ml-24"
                initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                {service.title}
                <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      />
              </motion.p>

              
              <span className="text-gray-400 text-sm md:text-base lg:text-lg ml-4 shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </div>
          ))}
        </div>

      </div>

<svg
  className="hidden absolute sm:block sm:w-[27%] right-[3%] w-[50%] md:w-[30%] lg:w-[35%] pointer-events-none"
  viewBox="0 0 300 200"
  fill="none"
  style={{ transform: 'rotate(15deg)', transformOrigin: 'bottom right',filter: 'drop-shadow(0px 8px 2px rgba(0, 0, 0, 1))'}}
>
  <path
    d="M 0 200 C 0 150, 100 180, 80 120 C 60 60, 150 80, 150 30 C 150 0, 250 20, 300 0"
    stroke="#FF4D3D"
    strokeWidth="1.2"
    fill="none"
    strokeLinecap="round"
  />
</svg>
    </section>
  )
}
