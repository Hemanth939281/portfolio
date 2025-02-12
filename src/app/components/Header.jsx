"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  
      useEffect(() => {
        const checkScreenSize = () => {
          setIsMobile(window.innerWidth < 768); 
        };
    
        checkScreenSize(); 
        window.addEventListener("resize", checkScreenSize);
    
        return () => window.removeEventListener("resize", checkScreenSize);
      }, []);
    
      const handleClick = () => {
        if (isMobile) {
          setIsMenuOpen(false);
        }
      };
    

    const links = [
        {name: 'Home', url: "/"},
        {name: 'About', url: "/about"},
        {name: 'Projects', url: "/projects"},
        {name: 'Contact me', url: "/contact"}
      ]

      const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
      }

      
    return (
       <div className="relative">
        <div className={`${isMenuOpen ? "opacity-100 h-full" : "opacity-0 h-0"} lg:opacity-100 lg:flex lg:justify-center lg:items-center py-6 mb-10 transition-opacity duration-300 px-4`}>
      <div className="relative lg:m-4 lg:m-auto w-full lg:w-auto text-center mt-2 flex flex-col lg:flex-row lg:gap-6 text-white text-lg lg:px-4 py-2 rounded-lg bg-red-500 blur-xs shadow-white shadow-md p-t-[16rem]">
      {isMenuOpen && 
           <button onClick={handleToggleMenu} className="mt-2 absolute right-4 rounded lg:hidden mb-4" ><Image src="/close.png" width={20} height={20} alt="menu icon"/></button>
     }
        {
          links.map((link) => (

            <Link href={link.url} key={link.name} onClick={isMobile ? handleClick : undefined} className="block p-2 lg:px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition duration-300 ease-in-out cursor-pointer">
              {link.name}
            </Link>
          ))
        }
      </div>
    </div>
     
     {!isMenuOpen && 
           <button onClick={handleToggleMenu} className="absolute top-4 right-4 bg-white rounded lg:hidden" ><Image src="/menu.png" width={30} height={30} alt="menu icon"/></button>
     }

       </div>
    )
}

export default Header