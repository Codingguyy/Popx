import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Help", href: "#help" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white">

        
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
          <div className="relative flex items-center justify-between h-14 md:h-16 lg:h-[72px]">

            
            <a
              href="#home"
              className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight z-10 select-none"
              style={{ fontFamily: "'Roboto Mono', monospace" }}
            >
              Elementum
            </a>

            <ul className="hidden md:flex items-center gap-7 lg:gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[11px] lg:text-xs text-gray-500 font-normal tracking-wide hover:text-gray-900 transition-colors duration-200"
                    style={{ fontFamily: "'Roboto Mono', monospace" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

           
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-end gap-[6px] w-8 h-8 z-10 cursor-pointer"
            >
              <span
                className={`block w-5 h-[1.5px] bg-gray-800 transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-[3.75px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-gray-800 transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[3.75px]" : "w-3"
                }`}
              />
            </button>

          </div>
        </div>

        
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-8 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200 py-3 border-b border-gray-100 last:border-0 tracking-wide"
                  style={{ fontFamily: "'Roboto Mono', monospace" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>

      
      <div className="h-14 md:h-16 lg:h-[72px]" />
    </>
  );
}
