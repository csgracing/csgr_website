
import type { Metadata } from 'next'
import SponsorCarousel from './components/SponsorCarousel/SponsorCarousel';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'City St Georges Racing',
  description: '...',
}

export default function Home() {
  return (
    <div>
      <div className='md:flex gap-20'>
          <iframe className='aspect-video w-full md:w-1/2 'src="https://www.youtube.com/embed/50RhVl2hXdg?si=BZW6Ixk2Ax2tJvSC&amp&autoplay=1&mute=1&controls=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <ul className='py-5'>
            <h1 className='text-3xl text-csg-red font-mono font-extrabold'>City St Georges Racing Driving Innovation</h1>
            <ul className='list-disc text-md'>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </li>
            </ul>
        </ul>
      </div>
        <Link href="/sponsors">
          <SponsorCarousel/>
        </Link>
    </div>
    
  );
}
