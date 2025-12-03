import type { Metadata } from 'next';
import SponsorGrid from '../components/SponsorCarousel/SponsorGrid';
export const metadata: Metadata = {
  title: 'CSGR | Sponsors',
  description: '...',
}

export default function sponsors() {

  return (
    <div className=''>
    <h1 className='text-2xl md:text-4xl text-center py-4 text-csg-red'>OUR SPONSORS</h1>
    <h2 className='text-lg md:text-2xl text-center py-4 px-10'>We proudly recognize the partners whose support makes our mission possible. Each sponsor plays a vital role in helping the development of our car</h2>
    <SponsorGrid />
    </div>
  );
}
