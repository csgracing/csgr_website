
'use client'
import { SetStateAction, useState } from 'react';

import MenuIcon from './menu.svg'
import Cross from './cross.svg'
import SeasonDropDown from './SeasonDropDown';
import Link from 'next/link';
import { pages } from './pages';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: SetStateAction<string>) => {
        setIsOpen(false);
    };
    

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
                <Cross className='w-28 h-28 transition duration-300 px-5 stroke-white hover:stroke-csg-red hover:scale-115'/>
                )}
                {!isOpen &&(
                <MenuIcon className='w-28 h-28 transition duration-300 px-5 fill-white hover:fill-csg-red hover:scale-115'/>
                )}
                </button>

                {/* Dropdown menu */}
                {isOpen && (

                    <div className="top-left absolute
                                    w-screen h-screen sm:w-100
                                    bg-black border-t-3 sm:rounded-xl sm:border-3 border-csg-red
                                    focus:outline-none
                                    ">
                        <div className="py-1">
                            {pages.map((page,index) => (
                            <div className='' key={index}>
                                {page.name!=="CurrentSeason"&&(
                                <Link
                                    href={page.link}
                                    className="
                                            flex px-4 py-4 text-center sm:text-left
                                            transition duration-300 hover:text-2xl hover:text-csg-red font-bold justify-center sm:justify-start"
                                    onClick={() => handleSelect(page.link)}
                                    
                                > 
                                    {page.name}
                                </Link>
                                )}      
                                {page.name==="CurrentSeason"&&(
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