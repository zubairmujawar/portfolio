import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logo from '../../public/zm-logo.png'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleaClick = () => {
    // Close the responsive menu when a navigation a is clicked
    setToggle(false);
  };

  return (
    <header className="w-full p-2 h-16 bg-[#777979] text-[#000000]">
    <nav className="max-w-[1440px] mx-auto h-full flex justify-between items-center">
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-[3.5rem] h-[55px] object-cover"
        />
      </a>
      {toggle ? (
        <MdOutlineClose
          onClick={() => setToggle(!toggle)}
          className="text-2xl cursor-pointer duration-700"
        />
      ) : (
        <IoMenu
          onClick={() => setToggle(!toggle)}
          className="text-2xl cursor-pointer md:hidden block duration-700"
        />
      )}
      <ul className="hidden md:flex gap-5 px-2">
        <li className="hoverli">
          <a
            href="#home"
            className="block py-2 text-white pr-4 pl-3 duration-800 hoverli"
          >
            Home
          </a>
        </li>
        <li className="hoverli">
          <a
            href="#about"
            className="block py-2 text-white pr-4 pl-3 duration-800 hoverli"
          >
            About
          </a>
        </li>
        <li className="hoverli">
          <a
            href="#projects"
            className="block py-2 text-white pr-4 pl-3 duration-800 hoverli"
          >
            Projects
          </a>
        </li>
        <li className="hoverli">
          <a
            href="#contact"
            className="block py-2 text-white pr-4 pl-3 duration-800 hoverli"
          >
            Contact
          </a>
        </li>
      </ul>
      {/* Responsive menu */}
      <ul
        className={`md:hidden z-[99] duration-700 ease-in-out text-2xl fixed bg-[#777979] justify-right items-center flex flex-col right-[-100%] top-[4rem] gap-10 p-2 w-full h-full ${
          toggle ? "right-[0]" : "right-[-100%]"
        }`}
      >
        <li className="hoverli">
          <a
            href="#home"
            onClick={handleaClick}
            className="block py-2 text-white pr-4 pl-3 duration-800 hoverli"
          >
            Home
          </a>
        </li>
        <li className="hoverli">
          <a
            href="#about"
            onClick={handleaClick}
            className="block py-2 text-white pr-4 pl-3 duration-800 hoverli"
          >
            About
          </a>
        </li>
        <li className="hoverli">
          <a
            href="#projects"
            onClick={handleaClick}
            className="block py-2 text-white pr-4 pl-3 duration-800 hoverli"
          >
            Projects
          </a>
        </li>
        <li className="hoverli">
          <a
            href="#contact"
            onClick={handleaClick}
            className="block py-2 text-white pr-4 pl-3 duration-800 hoverli"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
  
  );
};

export default Navbar;