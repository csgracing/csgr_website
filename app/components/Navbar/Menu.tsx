
'use client'
import { SetStateAction, useState } from 'react';

import MenuIcon from '../navbar/menu.svg'
import Cross from '../navbar/cross.svg'
import SeasonDropDown from './SeasonDropDown';
import Link from 'next/link';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: SetStateAction<string>) => {
        setIsOpen(false);
    };
    const options=[
//      [Display Text, Link URL],
        ["Our Team","/teams/ourTeam"],
        ["CurrentSeason"],
        ["Competition","/competition"],
        ["Sponsors","/sponsors"],
        ["Team History","/teams/teamHistory"],
        ["Garage","/garage"],
        ["Gallery","/gallery"],
        ["Contact Us","/contactUs"],
    ];
    

    return (
        <div >
            <div className="relative inline-block text-left text-lg ">
                {/* Dropdown button */}
                <button
                    type="button"
                    className=""
                    onClick={toggleDropdown}
                >
                {isOpen &&(
                <Cross className='w-28 h-28 transition duration-300 px-5 stroke-black dark:stroke-white hover:stroke-csg-red hover:scale-115'/>
                )}
                {!isOpen &&(
                <MenuIcon className='w-28 h-28 transition duration-300 px-5 dark:fill-white hover:fill-csg-red hover:scale-115'/>
                )}
                </button>

                {/* Dropdown menu */}
                {isOpen && (

                    <div className="top-left absolute
                                    w-screen md:100
                                    bg-white dark:bg-black border-b-3 rounded-xl border-3  border-csg-red
                                    focus:outline-none
                                    ">
                        <div className="py-1">
                            {options.map((option,index) => (
                            <div className='' key={index}>
                                {option[0]!=="CurrentSeason"&&(
                                <Link
                                    href={option[1]}
                                    className="
                                            flex px-4 py-4 text-black text-center md:text-left dark:text-white
                                            transition duration-300 hover:text-2xl font-bold justify-center md:justify-start"
                                    onClick={() => handleSelect(option[1])}
                                    
                                > 
                                    {option[0]}
                                </Link>
                                )}      
                                {option[0]==="CurrentSeason"&&(
                                    <div className=''>
                                        <SeasonDropDown/>
                                    </div>
                                )}
                            </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}