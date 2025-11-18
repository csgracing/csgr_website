import react from 'react'
import Link from 'next/link'
import { FacebookLogo,InstaLogo,TiktokLogo,LinkedinLogo } from '../images/logos/logos'
import CsgrLogoLight from '../images/logos/csgr_logos/csgrLight.svg'
import Menu from './Menu'

const Navbar=()=>{
    return (
        <nav className='sticky z-1 top-0 w-full flex items-center justify-between border-b-3 border-csg-red bg-csg-white dark:bg-csg-black'>
            <Menu/>
            <Link href="/" className='transition durati"on-300 hover:scale-120 justify-between'>
                <CsgrLogoLight className='w-40 h-25 dark:fill-csg-white flex'/>
            </Link>
            <ul className='grid grid-cols-2 px-5'>
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