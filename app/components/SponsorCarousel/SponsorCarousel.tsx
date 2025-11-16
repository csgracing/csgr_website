import {Logos} from './logos'



// logos

function SponsorCarousel() {
  return (
      <div className="overflow-hidden whitespace-nowrap border-csg-red border-t-4 border-b-4 text-center text-xl py-5">
        Our Sponsors
        <div className='flex z-0'>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {Logos.map((Logo) => (
                <Logo className='w-auto h-20 md:h-30 fill-csg-white'/>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {Logos.map((Logo) => (
                <Logo className='w-auto h-20 md:h-30 fill-csg-white'/>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {Logos.map((Logo) => (
                <Logo className='w-auto h-20 md:h-30 fill-csg-white'/>
              ))}
            </div>
          </div>
          <div className="logos-slide">
            <div className="flex items-center justify-center-3 md:gap-x-2">
              {Logos.map((Logo) => (
                <Logo className='w-auto h-20 md:h-30 fill-csg-white'/>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default SponsorCarousel;