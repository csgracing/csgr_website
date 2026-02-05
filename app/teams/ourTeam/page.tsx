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
      <h1 className='text-4xl text-csg-red font-bold text-center my-5'>Our Team</h1>
      <PhotoFilter/>
    </div>
  );
}