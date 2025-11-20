import Link from 'next/link';
import {SponsorCarouselLogos} from '../images/logos/logos'



// logos

function SponsorCarousel() {
  return (
      <div className="logos overflow-hidden whitespace-nowrap bg-white dark:bg-black border-csg-red border-t-4 border-b-4 text-center py-1">
        <h1 className='font-bold text-xl'>Our Sponsors</h1>
        <div className='flex z-0'>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {SponsorCarouselLogos.map((Logo,index) => (
                <a href={Logo.link} key={index} target="_blank" rel="noopener noreferrer">
                  <Logo.src className='w-auto h-20 md:h-30 fill-black dark:fill-white'/>
                </a>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {SponsorCarouselLogos.map((Logo,index) => (
                <a href={Logo.link} key={index} target="_blank" rel="noopener noreferrer">
                  <Logo.src className='w-auto h-20 md:h-30 fill-black dark:fill-white'/>
                </a>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {SponsorCarouselLogos.map((Logo,index) => (
                <a href={Logo.link} key={index} target="_blank" rel="noopener noreferrer">
                  <Logo.src className='w-auto h-20 md:h-30 fill-black dark:fill-white'/>
                </a>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {SponsorCarouselLogos.map((Logo,index) => (
                <a href={Logo.link} key={index} target="_blank" rel="noopener noreferrer">
                  <Logo.src className='w-auto h-20 md:h-30 fill-black dark:fill-white'/>
                </a>
              ))}
            </div>
          </div>
        </div>
        {process.env.NODE_ENV === "development"&&(
        <Link href="/sponsors">
          <p className='text-csg-dark-gray text-sm'>Click to learn more</p>
        </Link>
        )}
      </div>
  );
}

export default SponsorCarousel;