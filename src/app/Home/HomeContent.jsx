"use client"

import Image from "next/image";
import {Grey_Qo, Lato, Mukta, Noto_Sans, Open_Sans} from "next/font/google"


    const greyQo = Grey_Qo({ subsets: ["latin"], weight: ["400"] });
    const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });
    const mukta = Mukta({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] });
    const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
    const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const HomeContent = ({name, description}) => {
  
    return (
        <div>
            <div className="text-white text-lg max-w-full lg:mx-28 lg:mt-[10%] flex flex-col lg:flex-row gap-16 lg:gap-36 justify-center p-6">
            <div className="mt-6 p-4 break-words w-full max-w-1/5">Hi, I'm<span className={`block text-7xl font-bold ${greyQo.className}`}>{name},</span><br/><span className={`block ${lato.className}`}>{description}</span>
            <div className="flex p-2 gap-6 lg:gap-16 text-black w-1/2 mt-10">
            <a href="/MyResume.pdf" target="_blank" className="px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded">See My Resume</a>
            <a href="/contact" className="px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded">Contact me</a>
        </div>
            </div>
            <Image width={200} height={200} src="/hemanth.jpg" alt="ProfilePhoto" className="shadow-white shadow-lg lg:hover:reflect rounded-tr-full rounded-tl-full w-96 h-[19rem] transition duration-300 ease-in-out"  />
        </div>
        </div>
    )
}


export default HomeContent;