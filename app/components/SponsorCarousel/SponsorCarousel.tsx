import {SponsorCarouselLogos} from '../images/logos/logos'



// logos

function SponsorCarousel() {
  return (
      <div className="overflow-hidden whitespace-nowrap border-csg-red border-t-4 border-b-4 text-center py-5">
        <h1 className='font-bold text-xl'>Our Sponsors</h1>
        <div className='flex z-0'>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {SponsorCarouselLogos.map((Logo,index) => (
                <Logo key={index} className='w-auto h-20 md:h-30 fill-csg-white'/>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {SponsorCarouselLogos.map((Logo,index) => (
                <Logo key={index} className='w-auto h-20 md:h-30 fill-csg-white'/>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {SponsorCarouselLogos.map((Logo,index) => (
                <Logo key={index} className='w-auto h-20 md:h-30 fill-csg-white'/>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {SponsorCarouselLogos.map((Logo,index) => (
                <Logo key={index} className='w-auto h-20 md:h-30 fill-csg-white'/>
              ))}
            </div>
          </div>
        </div>
        <p className='text-csg-dark-gray text-sm'>Click to learn more</p>
      </div>
  );
}

export default SponsorCarousel;