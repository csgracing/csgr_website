
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
          <iframe className='aspect-video w-full md:w-1/2 'src="https://www.youtube.com/embed/50RhVl2hXdg?si=BZW6Ixk2Ax2tJvSC&amp&autoplay=1&mute=1&controls=1&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
      <div className='py-2 text-center bg-black border-csg-red border-t-4 border-b-4'>
      <h1 className='text-3xl text-csg-red font-mono font-extrabold'>Check Us Out On Instagram <a href='https://www.instagram.com/csg.racing/' className="hover:underline decoration-csg-red">@csg.racing</a></h1>
      <iframe src="https://widget.taggbox.com/308607?website=1" className="w-full h-70"/>
      </div>
    <div className='md:flex py-4 mx-4 gap-5'>   
      <ul className='text-lg'>
        <h1 className='text-3xl text-csg-red font-mono font-extrabold'>About the competition</h1>
        <li>
          Formula Student UK is an annual engineering competition run by the Institution of Mechanical Engineers (IMechE), where student teams design, build, and race their own prototype single-seater cars. The event combines static events including engineering design, cost and manufacturing analysis, and a business presentation with dynamic events such as acceleration, skid-pad, autocross, and a long-distance endurance race.        </li>
        <br/>
        <li>
          Teams can enter one of several classes: the main Formula Student class (which includes internal combustion, electric, and hybrid vehicles), the FS-AI class for autonomous cars, and the Concept Class for design-only entries. The 2026 season continues to encourage innovation, offering financial awards to help teams develop their cars and refine their engineering approach.        </li>
        <br/>
        <li>
          Beyond the competition itself, Formula Student aims to give participants real-world engineering experience. Students gain hands-on skills in design, manufacturing, testing, project management, teamwork, and budgeting, making the event a major stepping stone into motorsport, automotive engineering, and wider STEM careers.        </li>
        <br/>
        <div className='justify-center flex'>
          <a href="https://www.imeche.org/events/formula-student" className='justify-center flex m-5'>
            <p className='p-2 align-center bg-csg-red  inline text-white rounded-lg text-center text-xl transition duration 300 hover:scale-120'>Learn More</p>
          </a>
        </div>
      </ul>
      <Image src={Graph} alt="" height={800} width={800} className='bg-black border-5 border-csg-red rounded-2xl'/>
     </div>   
     <div>
      <SponsorCarousel/>
      </div>
    </div>
    
  );
}
