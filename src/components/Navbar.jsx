import cattesized from "../assets/cattesized.png";
import me from "../assets/me.jpg";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const openMenu = () => setNav(!nav);

  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={navbarRef}
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300"
    >
      <div className="w-20 h-auto flex items-center justify-center rounded-full overflow-hidden">
        <img
          className="hover:scale-150 duration-500"
          src={cattesized}
          alt="Logo Image"
          style={{ width: "60px" }}
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-navbarHeight}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-navbarHeight}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-navbarHeight}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} offset={-navbarHeight}>
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-10" onClick={openMenu}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={openMenu}
            to="home"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={openMenu}
            to="about"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={openMenu}
            to="skills"
            smooth={true}
            duration={500}
            offset={-120}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={openMenu}
            to="work"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={openMenu}
            to="contact"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
          >
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a
            onClick={openMenu}
            href="https://www.linkedin.com/in/abdrouf/"
            target="_blank" //makes the link open in a new tab
            rel="noopener noreferrer" //security measure:prevent new tab from accessing the window.opener property
            className="text-gray-300"
          >
            LinkedIn
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            onClick={openMenu}
            href="https://github.com/roufkhalid93"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
          >
            Github
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            onClick={openMenu}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=roufkhalid93@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
          >
            Email
          </a>
        </li>
        <li className="py-6 text-4xl">
          <a
            onClick={openMenu}
            href="https://drive.google.com/file/d/1ByjQlxU4X0RETJFEaZhLM2Uk3ZR3S5w0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden md:flex fixed flex-col top-[65%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/abdrouf/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/roufkhalid93"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=roufkhalid93@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1ByjQlxU4X0RETJFEaZhLM2Uk3ZR3S5w0/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
