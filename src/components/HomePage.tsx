'use client'

import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll"; 




const Homepage = () => {
    return(
    <div className="h-screen w-full flex justify-center" id="home-section">
        <div className='container mt-60 mb-52 w-full flex flex-col lg:flex-row items-center lg:items-center  lg:justify-between'>

            <div className='relative px-5 lg:px-0 text-creamst flex flex-col text-5xl lg:text-7xl font-nunito'>
                <span className='text-shadow-custom font-extrabold z-10 '>Beli</span>
                <span className='text-shadow-custom font-black z-10 '>Stiker & Pin</span>
                <span className='text-shadow-custom font-black z-10 '>Disini</span>
                {/* <img src={circlecheck} className='absolute z-0 -top-6 -left-10 w-full lg:w-3/4 lg:-left-32 lg:-top-16' alt="" /> */}
                <p className='relative z-10 lg:w-1/2 w-full font-sans text-sm lg:text-lg mt-5'>
                Stickoala menjual stiker dan pin unik serta menyediakan jasa cetak stiker dan dokumen. Kami menawarkan berbagai desain menarik dan layanan profesional untuk memenuhi kebutuhan dekorasi dan cetak Anda.
                </p>

            
            <div>

                <Link  href={"/store"} >
                <button className='relative  z-10 duration-300 text-stickeryellow py-3 rounded-md px-10 lg:px-0 lg:w-1/4 text-sm lg:text-xl bg-stickered mt-5 font-bold hover:bg-stickeryellow hover:text-stickered'>
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
                <button className='relative  z-10 duration-300 text-stickeryellow py-3 rounded-md px-10 lg:px-0 lg:w-1/4 text-sm lg:text-xl ml-4 bg-stickered mt-5 font-bold hover:bg-stickeryellow hover:text-stickered'>
                        Collection & Services
                </button>
                </ScrollLink>
                </div>
            </div>


            <div className='text-creamst lg:flex flex-col text-7xl relative hidden'>
                <img alt="" src="/images/hero.svg" className='max-w-full' style={{ width: "1000px" }}/>
            </div>

        </div>
    </div>
    )
}

export default Homepage;