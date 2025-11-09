import react from 'react'
import Image from 'next/image';
import Link from 'next/link'
import CsgrLogoLight from '../images/logos/csgr_logos/csgrLight.svg'
import Facebook from '../images/logos/socials_logos/facebook.svg'
import Instagram from '../images/logos/socials_logos/instagram.svg'
import Tiktok from '../images/logos/socials_logos/tiktok.svg'
import Linkedin from '../images/logos/socials_logos/linkedin.svg'
import Menu from '../navbar/Menu'

const Navbar=()=>{
    return (
        <nav className='fixed top-0 w-full flex items-center justify-between border-b-3 border-csg-red bg-csg-white'>
            <Menu options={["competition","sponsors","teams"]} />
            
            
            <Link href="/" className='transition duration-300 hover:scale-120 justify-between'>
                <CsgrLogoLight className='w-40 h-25 '/>
            </Link>
            <ul className='flex'>
                <a href='https://www.instagram.com/csg.racing/'>
                    <Instagram className='w-15 h-15 transition duration-300 hover:fill-csg-red hover:scale-120'/>
                </a>
                <a href='https://www.tiktok.com/@csg.racing'>
                    <Tiktok className='w-15 h-15 transition duration-300 hover:fill-csg-red hover:scale-120'/>
                </a>
                <a href='https://www.linkedin.com/company/csgracing/'>
                    <Linkedin className='w-15 h-15 transition duration-300 hover:fill-csg-red hover:scale-120'/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=61583516661171'>
                    <Facebook className='w-15 h-15 transition duration-300 hover:fill-csg-red hover:scale-120'/>
                </a>

            </ul>


  
        </nav>
    )
}

export default Navbar