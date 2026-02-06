'use client'
import React, { useState } from 'react'
import { SponsorCarouselLogos } from "../images/logos/logos";

const SponsorGrid = () => {
    const [desc, setDesc] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
      
    const handleMouseEnter = (index: number) => {
        setDesc(true);
        setCurrentIndex(index);
        console.log(desc);
      };
    
    const handleMouseLeave = () => {
        setDesc(false);
        setCurrentIndex(null);
        console.log(desc);
    };

    return(
        <div className='md:grid grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 px-2 py-2'>
        {SponsorCarouselLogos.map((Logo, index) => (
        <div className='py-2'>
          <div key={index} className='flex flex-col justify-center bg-black overflow-x-hidden border-4 rounded-2xl border-csg-red h-100 text-center items-center p-4 gap-4' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
            <a href={Logo.link}>
              <Logo.src className='w-full py-2 px-2 fill-white hover:scale-110 transition duration-300'/>
            </a>
            <p className='relative text-md lg:hidden'>{Logo.desc}</p>
            {desc && currentIndex === index && (<p className='relative text-md text-slideIn'>{Logo.desc}</p>)}
          </div>
        </div>
        ))}
      </div>
    )
}
export default SponsorGrid;