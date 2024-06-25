import React from "react";
import ProductStickerCard from "./ProductStickerCard";
import Image from "next/image";
import documentIcon from "../../public/images/documentIcon.svg"
import stickerIcon from "../../public/images/stickerprint.svg"

// Import images using dynamic imports
const memeimg = '/images/StickerCard/meme.png';
const quotesimg = '/images/StickerCard/quotes.png';
const animeimg = '/images/StickerCard/anime.png';
const kpopimg = '/images/StickerCard/kpop.png';
const animalimg = '/images/StickerCard/animal.png';
const musicimg = '/images/StickerCard/music.png';

const memepin = '/images/StickerCard/pinmeme.png';
const quotespin = '/images/StickerCard/pinquote.png';
const animepin = '/images/StickerCard/pinanime.png';
const kpoppin = '/images/StickerCard/pinkpop.png';
const animalpin = '/images/StickerCard/pinanimal.png';
const musicpin = '/images/StickerCard/pinmusic.png';


const ProductPage = () => {
  return (
    <div className="md:h-screen w-full flex" id="product-section">
      <div className="container  mt-28 md:mt-40 w-full flex flex-col md:flex-col items-center md:items-center text-center">
        <h1 className="text-xl md:text-6xl font-serif text-stickeryellow">We Sell This Kind Of Stickers & Pins:</h1>
        
        <div className="flex w-full flex-wrap md:flex-row md:w-full gap-5 justify-center md:gap-10 mt-5">
          {/* Render ProductStickerCard components */}
          <ProductStickerCard text="Meme" src={memeimg} srcpin={memepin} link="store" />
          <ProductStickerCard text="Music" src={musicimg} srcpin={musicpin} link="store"/>
          <ProductStickerCard text="Quote" src={quotesimg} srcpin={quotespin} link="store" />
          <ProductStickerCard text="Anime" src={animeimg} srcpin={animepin} link="store"/>
          <ProductStickerCard text="Kpop" src={kpopimg} srcpin={kpoppin} link="store"/>
          <ProductStickerCard text="Animal" src={animalimg} srcpin={animalpin} link="store" />

        </div>

        <h1 className="text-xl mt-10 md:text-6xl font-serif text-stickeryellow">Other Services</h1>
        
        <div className="mb-24 flex w-full flex-wrap md:flex-row md:w-full  justify-center md:gap-40 mt-24">
          {/* Render ProductStickerCard components */}
          
          <div className=" w-[22rem] h-40 flex justify-center items-center relative">
                <div className="bg-stickeryellow h-32 rounded-md w-96 flex justify-around items-center">
                <span></span>
                <span></span>
                
                <Image src={documentIcon} alt={"jsjs"} width={230} height={230} className="absolute -left-16" />
                <h1 className=" text-2xl font-bold text-greenst">Print Document</h1>
                
                </div>
          </div>

          <div className=" w-[22rem] h-40 flex justify-center items-center relative">
                <div className="bg-stickeryellow h-32 rounded-md w-96 flex justify-around items-center">
                <span></span>
                <span></span>
                
                <Image src={stickerIcon} alt={"jsjs"} width={220} height={220} className="absolute -left-14" />
                <h1 className=" text-2xl font-bold text-greenst">Print Sticker</h1>
                
                </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default ProductPage;
