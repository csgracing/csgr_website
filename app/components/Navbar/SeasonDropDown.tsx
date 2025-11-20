'use client';
import {SetStateAction,useState } from 'react';
import DropDownArrow from './dropdownArrow.svg';
import Link from 'next/link';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: SetStateAction<string>) => {
        setIsOpen(false);
    };
    const seasons=[
        ["Season'25","/teams/2025season"],
        ["Season'18","/teams/2018season"],
        ["Season'17","/teams/2017season"],
        ["Season'16","/teams/2016season"],
    ];
    

    return (
        <div >
            <div>
            <div className="sticky flex text-center justify-center items-center md:justify-start md:text-left text-lg font-bold">
                {/* Dropdown button */}
                <Link href="/teams/2026season" 
                className="flex px-4 pb-1
                         text-black dark:text-white
                           transition duration-300 hover:not-md:text-2xl hover:md:underline decoration-csg-red underline-offset-4">
                           Season'26
                </Link>
                <button
                    type="button"
                    className=""
                    onClick={toggleDropdown}
                >
                {isOpen &&(
                <DropDownArrow className='w-15 stroke-csg-red fill-csg-red rotate-180'/>
                )}
                {!isOpen &&(
                <DropDownArrow className='h-15 stroke-csg-red fill-csg-red'/>
                )}
                </button>
                </div>

                {/* Dropdown menu */}
                {isOpen && (

                    <div className="origin-bottom-left relative md:absolute
                                    w-110 md:w-45
                                    bg-white dark:bg-black border-b-3 rounded-xl border-3  border-csg-red
                                    focus:outline-none
                                    ">
                        <div className="">
                            {seasons.map((season,index) => (
                            <div key={index}>
                                <Link
                                    href={season[1]}
                                    className="flex px-4
                                            text-black text-center md:text-left dark:text-white
                                            transition duration-300 hover:text-2xl text font-bold justify-center md:justify-start"
                                    onClick={() => handleSelect(season[1])}
                                >
                                    {season[0]}
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