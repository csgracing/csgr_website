import react from 'react'
import CsgrLogo from '../images/logos/csgr_logos/csgrLight.svg'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bottom-0 w-full bg-csg-black text-csg-white">
            <div className="border-t-2 border-csg-red">
                
            </div>
            {/* Footer Content */}
            <div className="px-5 grid 
            grid-cols-1 md:grid-cols-5 col-auto py-4">
            
                
            <ul className='space-y-2'>
            <h3 className=' underline underline-offset-3 font-semibold'>Contact form to be placed here</h3>
            <li>
            <p><a href="mailto:&#099;&#097;&#108;&#117;&#109;&#098;&#114;&#101;&#101;&#110;&#099;&#104;&#097;&#112;&#109;&#097;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">Send email</a></p>
            </li>
            </ul>
            <ul className='grid grid-cols-1 md:grid-cols-2'>
                <ul>
                <h3 className="font-semibold underline underline-offset-3">Find Us</h3>
                <p className="footer-text">Northampton Square</p>
                <br/>
                <p className="footer-text">London EC1V 0HB</p>
                <br/>
                <p className="footer-text">United Kingdom</p>
                <br/>
                </ul>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.428217277949!2d-0.10400743992289398!3d51.52701524712892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca7b1d83351%3A0x570d19c20ab22a83!2sCity%20St%20George&#39;s%2C%20University%20of%20London!5e1!3m2!1sen!2suk!4v1762947655271!5m2!1sen!2suk" 
                width="300" height="300"
            />
            </ul>
            </div>

            {/* Footer Bottom */}
            <div className="items-center text-center text-csg-dark-gray mt-2">
               City St Georges Racing 2025<br/>
               Designed by Sabrina Ahmud Developed by Calum Breen-Chapman
            </div>
        </footer>
    );
};

export default Footer;