import react from 'react'
import Link from 'next/link'
import { FacebookLogo,InstaLogo,TiktokLogo,LinkedinLogo } from '../images/logos/logos'
import CsgrLogoLight from '../images/logos/csgr_logos/csgrLight.svg'
import SeasonDropDown from './SeasonDropDown';
import Menu from './Menu'
import { pages } from './pages';

const Navbar=()=>{
    
    return (
        <nav className='sticky z-1 top-0 w-full flex items-center justify-between border-b-3 border-csg-red bg-white dark:bg-black uppercase'>
            {/*mobile menu*/}
            {process.env.NODE_ENV === "development"&&(
                <div className='xl:hidden'>
                        <Menu/>
                </div>
            )}
            <Link href="/" className='transition duration-300 hover:scale-120'>
                <CsgrLogoLight className='w-40 h-25 mx-5 dark:fill-white flex'/>
            </Link>
            {/*desktop menu*/}
            {process.env.NODE_ENV === "development"&&(
            
            <div className='flex gap-1 not-xl:hidden'>
                
                {pages.map((page,index) => (
                            <div className='' key={index}>
                                {page.name!=="CurrentSeason"&&(
                                <Link
                                    href={page.link}
                                    className="
                                            flex px-3 py-4 text-black text-center md:text-left text-lg dark:text-white
                                            transition duration-300 not-xl:hover:text-csg-red decoration-csg-red underline-offset-4 font-bold justify-center md:justify-start"
                                    
                                > <span className='link-underline link-underline-csg-red px-1'>{page.name}</span>
                                    
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
        )}
            <ul className='flex gap-2 not-2xl:hidden mx-5'>
                {/*desktop socials*/}
                <a href='https://www.instagram.com/csg.racing/'>
                    <InstaLogo className='w-12 h-12 transition duration-300 dark:fill-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.tiktok.com/@csg.racing'>
                    <TiktokLogo className='w-12 h-12 transition duration-300 dark:fill-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.linkedin.com/company/csgracing/'>
                    <LinkedinLogo className='w-12 h-12 transition duration-300  dark:fill-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=61583516661171'>
                    <FacebookLogo className='w-12 h-12 transition duration-300 dark:fill-white hover:fill-csg-red hover:scale-115'/>
                </a>
                </ul>

                {/*mobile socials*/}
                <ul className='grid grid-cols-2 px-5 gap-1 2xl:hidden'>
                <ul>
                <a href='https://www.instagram.com/csg.racing/'>
                    <InstaLogo className='w-12 h-12 transition duration-300 dark:fill-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.tiktok.com/@csg.racing'>
                    <TiktokLogo className='w-12 h-12 transition duration-300 dark:fill-white hover:fill-csg-red hover:scale-115'/>
                </a>
                </ul>
                <ul>
                    <a href='https://www.linkedin.com/company/csgracing/'>
                        <LinkedinLogo className='w-12 h-12 transition duration-300  dark:fill-white hover:fill-csg-red hover:scale-115'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=61583516661171'>
                        <FacebookLogo className='w-12 h-12 transition duration-300 dark:fill-white hover:fill-csg-red hover:scale-115'/>
                    </a>
                </ul>
            </ul>  
                
        </nav>
    )
}

export default Navbar