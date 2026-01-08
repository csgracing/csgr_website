import type { Metadata } from 'next';
import Link from 'next/link';
import SponsorGrid from '../components/SponsorCarousel/SponsorGrid';
export const metadata: Metadata = {
  title: 'CSGR | Sponsors',
  description: '...',
}

export default function sponsors() {

  
  return (
    <div className=' text-center py-4'>
      <h1 className='text-2xl md:text-4xl py-2 text-csg-red'>OUR SPONSORS</h1>
      <h2 className='text-lg md:text-2xl py-2 px-10'>We proudly recognize the partners whose support makes our mission possible. Each sponsor plays a vital role in helping the development of our car</h2>
      <div className=''>
        <Link href='sponsorBrochure.pdf' className='justify-center flex m-5'><p className='bg-csg-red px-4 py-2 rounded-lg text-lg transition duration 300 hover:scale-120 '>Download Our Sponsor Brochure</p></Link>
      </div>
        <SponsorGrid/>
    </div>
  );
}
