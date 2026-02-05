'use client';
import {SetStateAction,useState } from 'react';
import DropDownArrow from './dropdownArrow.svg';
import Link from 'next/link';
import { seasons } from './pages';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: SetStateAction<string>) => {
        setIsOpen(false);
    };

    

    return (
        <div className='overflow-hidden'>
            <div>
            <div className="sticky flex text-center justify-center items-center sm:justify-start sm:text-left text-lg font-bold ">
                {/* Dropdown button */}
                <Link href="/teams/2026season" 
                className="flex ps-4 py-4
                         text-black dark:text-white
                           transition duration-300 hover:not-xl:text-2xl md:text-lg not-xl:hover:text-csg-red decoration-csg-red underline-offset-4">
                           <span className='not-xl:hidden link-underline link-underline-csg-red px-1'>Season'26</span>
                           <span className='xl:hidden'>Season'26</span>
                </Link>
                <button
                    type="button"
                    className=""
                    onClick={toggleDropdown}
                >
                {isOpen &&(
                <DropDownArrow className='w-15 stroke-csg-red fill-white dark:fill-black rotate-180 hover:scale-115 transition duration-300'/>
                )}
                {!isOpen &&(
                <DropDownArrow className='h-15 stroke-csg-red fill-white dark:fill-black hover:scale-115 transition duration-300'/>
                )}
                </button>
                </div>

                {/* Dropdown menu */}
                {isOpen && (

                    <div className="origin-bottom-left relative md:absolute
                                    w-full md:w-45
                                    bg-white dark:bg-black border-b-3 rounded-xl border-3  border-csg-red
                                    focus:outline-none
                                    ">
                        <div className="">
                            {seasons.map((season,index) => (
                            <div key={index}>
                                <Link
                                    href={season.link}
                                    className="flex px-4
                                            text-black text-center md:text-left dark:text-white
                                            transition duration-300 hover:text-2xl hover:text-csg-red font-bold text-lg justify-center md:justify-start"
                                    onClick={() => handleSelect(season.link)}
                                >
                                    {season.year}
                                </Link>
                            </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}