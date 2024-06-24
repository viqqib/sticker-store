"use client"; 

import React, {useState} from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; 

// index.js or App.js





// Add the icons to the library




const Navbar = () => {
    let links = [
        { name: 'Home', link: 'home-section' },
        { name: 'Products', link: 'product-section' },
        { name: 'Contact', link: 'contact-section' },
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
            <div className={`md:px-20 px-10 py-3 text-greenst bg-creamst w-screen md:flex md:justify-between md:items-center ${open ? 'border-none' : 'border-b-4 border-stickered border-dashed'}`}>
                <h1 className="flex logokoala items-center gap-1 z-20 font-medium font-serif text-4xl cursor-pointer duration-300"
                >
                    Stickoala
                </h1>
                <div 
                    className="absolute text-2xl right-10 top-6 hover:text-stickered duration-300 md:hidden cursor-pointer"
                    onClick={handleOnClickBars}
                >
                     <FontAwesomeIcon icon={open ? faXmark : faBars } />
                </div>
               
                <ul
          className={`md:flex md:items-center md:pb-0 md:pb-0 pb-5 absolute md:static bg-creamst md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-250px]"
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
          <div className="md:ml-7 mt-5 mb-5">
            <Button text="Order Now" link="order" />
          </div>
        </ul>

            </div>

        </div>
    );
}

export default Navbar;
