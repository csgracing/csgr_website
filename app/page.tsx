
import type { Metadata } from 'next'
import Image from 'next/image'
import car from './teams/2025season/images/carimages/car1.jpg'
 
export const metadata: Metadata = {
  title: 'City St Georges Racing',
  description: '...',
}

export default function Home() {
  return (
    <div>
      <div className='md:flex gap-20'>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/50RhVl2hXdg?si=BZW6Ixk2Ax2tJvSC&amp&autoplay=1&mute=1&controls=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <ul>
          <h1>subheading</h1>
          <li>
            statement 1
          </li>
          <li>
            statement 2
          </li>
          <li>
            statement 3
          </li>
        </ul>
      </div>
    </div>
    
  );
}
