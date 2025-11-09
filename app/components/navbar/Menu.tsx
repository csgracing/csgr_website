// Dropdown.js 

'use client'
import { JSXElementConstructor, SetStateAction, useState } from 'react';

import MenuIcon from '../navbar/menu.svg'
import Cross from '../navbar/cross.svg'
import Link from 'next/link';

export default function Menu({options}: { options: string[] }) {
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
                <Cross className='w-30 h-30 transition duration-300 px-5 hover:stroke-csg-red hover:scale-120'/>
                )}
                {!isOpen &&(
                <MenuIcon className='w-30 h-30 transition duration-300 px-5 hover:fill-csg-red hover:scale-120'/>
                )}
                
                
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                    <div className="origin-top-left absolute
                                    w-100
                                    bg-white border-b-3 border-csg-red
                                    focus:outline-none
                                    ">
                        <div className="py-1">
                            {options.map((option, index) => (
                                <Link
                                    key={index}
                                    href={option}
                                    className="block px-4 py-4
                                            text-black
                                            transition duration-300 hover:bg-gray-100 hover:text-2xl text font-bold"
                                    onClick={() => handleSelect(option)}
                                >
                                    {option}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}