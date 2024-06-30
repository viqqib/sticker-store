'use client'

import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll"; 
import Typewriter from "typewriter-effect";




const Homepage = () => {
    return(
    <div className="h-screen w-full flex justify-center" id="home-section">
        <div className='container mt-52 mb-52 w-full flex flex-col lg:flex-row items-center lg:items-center  lg:justify-between'>

            <div className='relative px-5 lg:px-0 text-creamst flex flex-col  font-nunito'>

                <span className='lg:text-shadow-custom font-extrabold z-10 text-[2.6rem] lg:text-6xl text-shadow-mobile'>Your Favourite</span>
                {/* <span className='font-serif lg:w-1/2  text-stickeryellow lg:text-shadow-mobile  mt-[-10px]  text-shadow-desc mb-[-7px] lg:mt-2 lg:mb-3 text-2xl lg:text-4xl z-10 '>Song, Movie, Anime & Idol</span> */}
                <span className='font-serif lg:w-1/2  text-stickeryellow typewriter-container lg:text-shadow-mobile  mt-[-15px]  text-shadow-desc mb-[-10px] lg:-mt-2 lg:mb-0 text-7xl lg:text-9xl z-10 '>
                <Typewriter
                    options={{
                        strings: ['Anime', 'Music', 'Movie', 'Idol', 'Waifu', 'Husbu'],
                        autoStart: true,
                        loop: true,
                        delay:70,
                        
                         // Adjust the typing speed (in milliseconds)
                        deleteSpeed: 70, 
                        cursor:'',// Adjust the deleting speed (in milliseconds)
                    }}
                /></span>
                <span className='text-shadow-mobile lg:text-shadow-custom font-black z-10  text-[2.6rem]  lg:text-6xl'>Stickers & Pins</span>
                {/* <img src={circlecheck} className='absolute z-0 -top-6 -left-10 w-full lg:w-3/4 lg:-left-32 lg:-top-16' alt="" /> */}
                <p className='relative z-10 lg:w-1/2 w-11/12 font-sans text-sm lg:text-lg mt-2'>
                Explore vibrant, high-quality stickers and pins featuring your favorite anime characters, movie icons, band logos, song lyrics, and idols. Perfect for personalizing your belongings, expressing your fandom, or gifting. We also offer custom printing for documents and stickers.
                </p>

            
            <div className="">

                <Link  href={"/store"} >
                <button className=' duration-300 text-stickeryellow py-3 lg:py-3 rounded-md px-5 lg:px-10 text-xs lg:text-xl bg-stickered mt-5 font-bold hover:bg-stickeryellow hover:text-stickered'>
                        Go To Store
                </button>
                </Link>
                <ScrollLink
                    to={'product-section'}
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="hover:text-stickered cursor-pointer duration-200"
                    activeClass="text-stickered"
                >
                <button className=' duration-300 text-stickeryellow py-3 lg:py- rounded-md  px-5 lg:px-10   text-xs lg:text-xl ml-4 bg-stickered mt-5 font-bold hover:bg-stickeryellow hover:text-stickered'>
                        Collection & Services
                </button>
                </ScrollLink>
                </div>
            </div>


            <div className='text-creamst lg:flex flex-col text-7xl relative hidden'>
                <img alt="" src="/images/store.svg" className='max-w-full w-[80rem]'/>
            </div>

        </div>
    </div>
    )
}

export default Homepage;