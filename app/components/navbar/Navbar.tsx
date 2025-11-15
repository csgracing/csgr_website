import react from 'react'
import Link from 'next/link'
import CsgrLogoLight from '../images/logos/csgr_logos/csgrLight.svg'
import Facebook from '../images/logos/socials_logos/facebook.svg'
import Instagram from '../images/logos/socials_logos/instagram.svg'
import Tiktok from '../images/logos/socials_logos/tiktok.svg'
import Linkedin from '../images/logos/socials_logos/linkedin.svg'
import Menu from '../navbar/Menu'

const Navbar=()=>{
    return (
        <nav className='fixed sticky top-0 w-full flex shrink-1 items-center justify-between border-b-3 border-csg-red bg-csg-white dark:bg-csg-black'>
            <Menu options={[["Competition","competition"],["Sponsors","sponsors"],["Seasons","teams"],["Team History","teamHistory"],["Garage","garage"]]} />
            <Link href="/" className='transition durati"on-300 hover:scale-120 justify-between'>
                <CsgrLogoLight className='w-40 h-25 dark:fill-csg-white flex'/>
            </Link>
            <ul className='grid grid-cols-2 px-5'>
                <ul>
                <a href='https://www.instagram.com/csg.racing/'>
                    <Instagram className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                </a>
                <a href='https://www.tiktok.com/@csg.racing'>
                    <Tiktok className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                </a>
                </ul>
                <ul>
                    <a href='https://www.linkedin.com/company/csgracing/'>
                        <Linkedin className='w-14 h-14 transition duration-300  dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=61583516661171'>
                        <Facebook className='w-14 h-14 transition duration-300 dark:fill-csg-white hover:fill-csg-red hover:scale-115'/>
                    </a>
                </ul>

            </ul>


  
        </nav>
    )
}

export default Navbar