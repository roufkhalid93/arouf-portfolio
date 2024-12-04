import cattesized from '../assets/cattesized.png'
import me from '../assets/me.jpg'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const openMenu = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[-80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className='w-20 h-20 flex items-center justify-center rounded-full overflow-hidden'>
                <img className='hover:scale-150 duration-500' src={cattesized} alt='Logo Image' style={{ width: '80px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div className='md:hidden z-10' onClick={openMenu}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={openMenu} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={openMenu} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={openMenu} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={openMenu} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={openMenu} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/abdrouf/'
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/roufkhalid93'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=roufkhalid93@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://drive.google.com/file/d/11HO93cBl8lD6D0RziD2SnZCDlcn2HYpE/view?usp=sharing'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

