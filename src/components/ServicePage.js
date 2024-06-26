import React from "react";
import documentIcon from "../../public/images/documentIcon.svg"
import stickerIcon from "../../public/images/stickerprint.svg"
import Image from "next/image";
import ServiceCard from '@/components/ServiceCard'

const ServicePage = () => {
    return(
            <div className="md:h-screen w-full flex" id="service-section">
             <div className="container  mt-28 md:mt-40 w-full flex flex-col md:flex-col items-center md:items-center text-center">

             <h1 className="text-xl mt-10 md:text-6xl font-serif text-stickeryellow">Our Services : </h1>
        
        <div className="mb-24 flex w-full flex-wrap md:flex-row md:w-full  justify-center md:gap-40 mt-24">
          {/* Render ProductStickerCard components */}
          

            <ServiceCard
            link="/services"
            image={documentIcon}
            alt="Description of the image"
            title="Print Document"
            />

            <ServiceCard
            link="/services"
            image={stickerIcon}
            alt="Description of the image"
            title="Print Sticker"
            />


        </div>

            </div>



            </div>
    )
}

export default ServicePage;