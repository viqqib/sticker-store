"use client"; 

import React, {useState} from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; 
import logoKoala from '../../public/images/logo.svg'
import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// index.js or App.js





// Add the icons to the library




const Navbar = () => {
    let links = [
        { name: 'Home', link: 'home-section' },
        { name: 'Collection', link: 'product-section' },
        { name: 'Service', link: 'service-section' },
        { name: 'About', link: 'about-section' },
    ];
    
    const [open, setOpen] = useState(false);

    // Function to toggle the navbar menu
    const handleOnClickBars = () => {
      setOpen(!open);
    };
  
    // Close the menu when a link is clicked
    const closeMenu = () => {
      setOpen(false);
    };

    
    return (
        <div className="navkoala fixed top-0 left-0 right-0 z-50">
            <div className={`md:px-24 px-10 py-5 md:py-5 flex justify-between items-center  text-greenst bg-creamst w-screen md:flex md:justify-between md:items-center ${open ? 'border-none' : 'border-b-4 border-stickered border-dashed'}`}>

            <div className={`text-2xl font-bold flex justify-center  items-center`}>
                    <Image src={logoKoala} alt="Stickoala Logo" width={40} height={40} className="md:h-9 md:w-9 w-7 h-7" />
                    <h1 className="font-serif text-2xl md:text-3xl ml-1">Stickoala</h1>
                </div>
                <div 
                    className="absolute text-xl right-10 top-5 hover:text-stickered duration-300 md:hidden cursor-pointer"
                    onClick={handleOnClickBars}
                >
                     <FontAwesomeIcon icon={open ? faXmark : faBars } />
                </div>
               
                <ul
          className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-creamst md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-250px]"
          } border-b-4 border-stickered border-dashed md:border-none`}
        >
          {links.map((link, index) => (
            <li key={index} className="mt-5 mb-5 md:ml-7 text-md font-medium">
              {/* Using react-scroll */}
              <ScrollLink
                to={link.link}
                smooth={true}
                duration={500}
                spy={true}
                className="hover:text-stickered cursor-pointer duration-200"
                onClick={closeMenu}
                activeClass="text-stickered"
              >
                {link.name}
              </ScrollLink>

              {/* Using react-router-dom Link */}
              {/* <Link
                to={`#${link.link}`}
                className="hover:text-stickered cursor-pointer duration-200"
                onClick={closeMenu}
              >
                {link.name}
              </Link> */}
            </li>
          ))}

        </ul>

            </div>

        </div>
    );
}

export default Navbar;
