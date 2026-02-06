import type { Metadata } from 'next'
import Image from 'next/image'
import PhotoFilter from './PhotoFilter'
 
export const metadata: Metadata = {
  title: 'CSGR | Our Team',
  description: '...',
}


export default function OurTeam() {
  return (
    <div>
      <h1 className='text-4xl text-csg-red font-bold text-center mt-2'>OUR TEAM</h1>
      <div className='p-2'>
      <PhotoFilter/>
      </div>

    </div>
  );
}