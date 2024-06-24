import React from "react";
import ProductStickerCard from "./ProductStickerCard";

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
    <div className="h-screen w-full flex" id="product-section">
      <div className="container  mt-28 md:mt-44 w-full flex flex-col md:flex-col items-center md:items-center text-center">
        <h1 className="text-xl md:text-6xl font-serif text-stickeryellow">We Sell This Kind Of Stickers & Pins:</h1>
        
        <div className="flex w-full flex-wrap md:flex-row md:w-full gap-5 justify-center md:gap-10 mt-5">
          {/* Render ProductStickerCard components */}
          <ProductStickerCard text="Meme" src={memeimg} srcpin={memepin} link="products/meme" />
          <ProductStickerCard text="Music" src={musicimg} srcpin={musicpin} link="products/music"/>
          <ProductStickerCard text="Quote" src={quotesimg} srcpin={quotespin} link="products/quote" />
          <ProductStickerCard text="Anime" src={animeimg} srcpin={animepin} link="products/anime"/>
          <ProductStickerCard text="Kpop" src={kpopimg} srcpin={kpoppin} link="products/kpop"/>
          <ProductStickerCard text="Animal" src={animalimg} srcpin={animalpin} link="products/animal" />

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
