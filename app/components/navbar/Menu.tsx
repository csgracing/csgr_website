// Dropdown.js 

'use client'
import { JSXElementConstructor, SetStateAction, use, useState } from 'react';

import MenuIcon from '../navbar/menu.svg'
import Cross from '../navbar/cross.svg'
import Link from 'next/link';

export default function Menu({options}: { options: string[][] }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: SetStateAction<string>) => {
        setIsOpen(false);
    };

    return (
        <div >
            <div className="relative inline-block text-left ">
                {/* Dropdown button */}
                <button
                    type="button"
                    className=""
                    onClick={toggleDropdown}
                >
                {isOpen &&(
                <Cross className='w-28 h-28 transition duration-300 px-5 stroke-csg-black dark:stroke-csg-white hover:stroke-csg-red hover:scale-115'/>
                )}
                {!isOpen &&(
                <MenuIcon className='w-28 h-28 transition duration-300 px-5 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                )}
                
                
                </button>

                {/* Dropdown menu */}
                {isOpen && (

                    <div className="origin-top-left absolute
                                    w-110 md:100
                                    bg-white dark:bg-csg-black border-b-3 rounded-b-xl border-r-3  border-csg-red
                                    focus:outline-none
                                    ">
                        <div className="py-1">
                            {options.map((option, index) => (
                                <Link
                                    key={index}
                                    href={option[1]}
                                    className="block px-4 py-4
                                            text-black text-center md:text-left dark:text-csg-white
                                            transition duration-300 hover:text-2xl text font-bold"
                                    onClick={() => handleSelect(option[1])}
                                >
                                    {option[0]}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}