import react from 'react'
import Link from 'next/link'
import { FacebookLogo,InstaLogo,TiktokLogo,LinkedinLogo } from '../images/logos/logos'
import CsgrLogoLight from '../images/logos/csgr_logos/csgrLight.svg'
import SeasonDropDown from './SeasonDropDown';
import Menu from './Menu'

const Navbar=()=>{
    const options=[
//      [Display Text, Link URL],
        ["Our Team","/teams/ourTeam"],
        ["CurrentSeason"],
        ["Competition","/competition"],
        ["Sponsors","/sponsors"],
        ["Team History","/teams/teamHistory"],
        ["Gallery","/gallery"],
        ["Contact Us","/contactUs"],
    ];
    return (
        <nav className='sticky z-1 top-0 w-full flex items-center justify-around border-b-3 border-csg-red bg-csg-white dark:bg-csg-black'>
            {/*mobile menu*/}
            {process.env.NODE_ENV === "development"&&(
                <div className='md:hidden'>
                        <Menu/>
                </div>
            )}
            <Link href="/" className='transition duration-300 hover:scale-120 justify-between'>
                <CsgrLogoLight className='w-40 h-25 dark:fill-csg-white flex'/>
            </Link>
            {/*desktop menu*/}
            {process.env.NODE_ENV === "development"&&(
            
            <div className='flex gap-1 not-md:hidden'>
                
                {options.map((option,index) => (
                            <div className='' key={index}>
                                {option[0]!=="CurrentSeason"&&(
                                <Link
                                    href={option[1]}
                                    className="
                                            flex px-4 py-4 text-black text-center md:text-left dark:text-csg-white
                                            transition duration-300 hover:underline decoration-csg-red underline-offset-4 font-bold justify-center md:justify-start"
                                    
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
        )}
            <ul className='flex gap-2 not-md:hidden'>
                {/*desktop socials*/}
                <a href='https://www.instagram.com/csg.racing/'>
                    <InstaLogo className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.tiktok.com/@csg.racing'>
                    <TiktokLogo className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.linkedin.com/company/csgracing/'>
                        <LinkedinLogo className='w-14 h-14 transition duration-300  dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=61583516661171'>
                        <FacebookLogo className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                </a>
                </ul>

                {/*mobile socials*/}
                <ul className='grid grid-cols-2 px-5 md:hidden'>
                <ul>
                <a href='https://www.instagram.com/csg.racing/'>
                    <InstaLogo className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.tiktok.com/@csg.racing'>
                    <TiktokLogo className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                </a>
                </ul>
                <ul>
                    <a href='https://www.linkedin.com/company/csgracing/'>
                        <LinkedinLogo className='w-14 h-14 transition duration-300  dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=61583516661171'>
                        <FacebookLogo className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                    </a>
                </ul>
            </ul>  
                
        </nav>
    )
}

export default Navbar