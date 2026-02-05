'use client'
import Image from 'next/image';
import graph from './teamMembers/Graph.png'
import React from 'react';



export default function PhotoFilter() {

  const teamMembers = [
  {Name: "Calum Breen-Chapman", Role: "Web Developer", Image:graph ,Department:"Software", tag:["TL","SW"], desc:"Calum is a web developer responsible for designing and maintaining the team's website. He ensures that the site is user-friendly, visually appealing, and up-to-date with the latest information about the team and its activities."},
  {Name: "Calum Breen-Chapman", Role: "Web Developer", Image:graph ,Department:"Software", tag:["SW"], desc:"Calum is a web developer responsible for designing and maintaining the team's website. He ensures that the site is user-friendly, visually appealing, and up-to-date with the latest information about the team and its activities."},
];

const departments=[
  {id:"TL", name:"Team Leads"},
  {id:"SW", name:"Software"},
  {id:"ME", name:"Mechanical"},
  {id:"EV", name:"Electrical"},
  {id:"AE", name:"Aerodynamics"}
];

const [Selected, setSelected] = React.useState("All");
function handleSelect(option: string){
  if(Selected===option){
    setSelected("All");
  }else{
    setSelected(option);
  }
  console.log(Selected);
}

  return (
    <div>
      <div className='flex justify-center gap-5'>
      {departments.map((department,index)=><button key={index} onClick={()=>handleSelect(department.id)} className=' text-2xl rounded-3xl p-1 bg-csg-red text-white font-bold text-center my-5 hover:bg-csg-light-gray transition duration-500'>{department.name}</button>)}
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {teamMembers.map((member) => ( 
          <div key={member.Name} className=''>
          {(Selected === "All" || member.tag.includes(Selected)) && (<div className='bg-black border-3 border-csg-red rounded-xl flex flex-col items-center justify-center text-center'>
          <Image className='my-2' src={member.Image} alt={member.Name} width={200} height={200} />
            <div className='my-2'>
                <h3 className='text-csg-red text-xl'>{member.Name}</h3>
                <p className='text-lg'>{member.Department}</p>
                <p>{member.Role}</p>
                <p>{member.desc}</p>
              </div>
              </div>
              )}
        </div>
      ))}
      </div>
      
      
    </div>
  );
}