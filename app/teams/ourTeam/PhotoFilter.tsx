'use client'
import Image from 'next/image';
import React from 'react';
import {teamMembers,departments} from './teamMembers/TeamMembers'


export default function PhotoFilter() {

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
      <div className='flex flex-wrap justify-center items-center gap-5 '>
      {departments.map((department,index)=><button key={index} onClick={()=>handleSelect(department.id)} className={'text-lg border-2 lg:text-2xl xl:text-3xl rounded-4xl p-2 font-bold text-center my-5 hover:bg-csg-red hover:opacity-100 bg-csg-red opacity-65'+ (Selected===department.id ? "opacity-100" : "") +' transition duration-500'}>{department.name}</button>)}
      </div>
      <div className='sm:grid sm:grid-cols-2 xl:grid-cols-4 justify-center gap-5'>
        {teamMembers.map((member) => ( 
          <div key={member.id} className=''>
          {(Selected === "All" || member.tag.includes(Selected)) && (<div className='bg-black border-3 border-csg-red rounded-xl flex flex-col items-center justify-center text-center'>
          <Image className='my-2' src={member.Image} alt={member.Name} width={200} height={300} />
            <div className='my-2'>
                <h3 className='text-csg-red text-2xl'>{member.Name}</h3>
                <p className='text-lg'>{member.Department+(member.tag.includes('TL') ? " Team Lead" : "")}</p>
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