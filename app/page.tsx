
import type { Metadata } from 'next'
import SponsorCarousel from './components/SponsorCarousel/SponsorCarousel';
import Image from 'next/image';
import Link from 'next/link';
import Graph from './Graph.png'
 
export const metadata: Metadata = {
  title: 'City St Georges Racing',
  description: '...',
}

export default function Home() {
  return (
    <div>
      <div className='md:flex gap-20 py-2'>
          <iframe className='aspect-video w-full md:w-1/2 'src="https://www.youtube.com/embed/50RhVl2hXdg?si=BZW6Ixk2Ax2tJvSC&amp&autoplay=1&mute=1&controls=0&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <ul className='py-5 mx-4'>
            <h1 className='text-3xl text-csg-red font-mono font-extrabold'>City St Georges Racing Driving Innovation</h1>
            <ul className='list-disc text-lg mx-6'>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              </li>
            </ul>
        </ul>
      </div>
      <SponsorCarousel/>
    <div className='md:flex py-4 mx-4 gap-5'>   
      <ul className=''>
        <h1 className='text-3xl text-csg-red font-mono font-extrabold'>About the competition</h1>
        <li>
          Formula Student is divided into distinct classes; Combustion, Driverless and Electric. At competitions each car competes separately and is judged in two types of events, Dynamic and Static.
        </li>
        <br/>
        <li>
          Static events allow the team to demonstrate their knowledge behind the development of the cars and test industry skills such as entrepreneurialism, financial acumen and the holistic engineering design process behind the cars.
        </li>
        <br/>
        <li>
          Dynamic events are the culmination of the design process, testing the performance of the cars in a variety of scenarios. These events require more than just the quickest car; they are a test of reliability, efficiency and driver skill.
        </li>
        <br/>
        <div className='justify-center flex'>
          <a href="https://www.imeche.org/events/formula-student" className='justify-center flex m-5'>
            <p className='p-2 align-center bg-csg-light-gray border-3 border-csg-red inline  rounded-lg text-center text-xl transition duration 300 hover:scale-120'>Learn More</p>
          </a>
        </div>
      </ul>
      <Image src={Graph} alt="" height={600} width={600} className='bg-csg-light-gray border-3 border-csg-red rounded-2xl'/>
     </div>   
    </div>
    
  );
}
