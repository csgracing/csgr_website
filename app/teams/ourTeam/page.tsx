import type { Metadata } from 'next'
import Image from 'next/image'
 
export const metadata: Metadata = {
  title: 'CSGR | Our Team',
  description: '...',
}

import graph from './teamMembers/Graph.png'
const teamMembers = [
  {Name: "Calum Breen-Chapman", Role: "Web Developer", Image:graph ,Department:"Software", desc:"Calum is a web developer responsible for designing and maintaining the team's website. He ensures that the site is user-friendly, visually appealing, and up-to-date with the latest information about the team and its activities."},
  {Name: "Calum Breen-Chapman", Role: "Web Developer", Image:graph ,Department:"Software", desc:"Calum is a web developer responsible for designing and maintaining the team's website. He ensures that the site is user-friendly, visually appealing, and up-to-date with the latest information about the team and its activities."},
];

const departments=[
  {id:"TL", name:"Team Leads"},
  {id:"SW", name:"Software"},
  {id:"ME", name:"Mechanical"},
  {id:"EV", name:"Electrical"},
  {id:"AE", name:"Aerodynamics"}
];


export default function OurTeam() {
  return (
    <div>
      <h1 className='text-4xl text-csg-red font-bold text-center my-5'>Our Team</h1>
      <div className='flex justify-center gap-5'>
      {departments.map((department,index)=><button key={index} className=' text-2xl rounded-3xl p-1 bg-csg-red text-white font-bold text-center my-5 hover:bg-csg-light-gray transition duration-500'>{department.name}</button>)}
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {teamMembers.map((member) => ( 
          <div key={member.Name} className='bg-black border-3 border-csg-red rounded-xl flex flex-col items-center justify-center text-center'>
          <Image className='my-2' src={member.Image} alt={member.Name} width={200} height={200} /><div className='my-2'>
                <h3 className='text-csg-red text-xl'>{member.Name}</h3>
                <p className='text-lg'>{member.Department}</p>
                <p>{member.Role}</p>
                <p>{member.desc}</p>
              </div>
        </div>
      ))}
      </div>
      
    </div>
  );
}