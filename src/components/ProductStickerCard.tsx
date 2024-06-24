import React from "react";

type ProductStickerCardProps = {
  src: string;      // Source URL for the sticker image
  srcpin: string;   // Source URL for the pin image
  link: string;     // Link for the button
  text: string;     // Text to display on the button
};

const ProductStickerCard = ({ src, srcpin, link, text }: ProductStickerCardProps) => {
  return (
    <div className="md:w-48 md:h-60 w-24 h-32 flex flex-col justify-between relative hover-container cursor-pointer">
      {/* Placeholder for optional additional content */}
      <span></span>

      {/* Sticker Image */}
      <img
        src={src}
        className="stickerimg absolute bottom-0 left-0 w-24 md:w-44 z-10 transition-transform duration-300"
        alt=""
      />

      {/* Pin Image */}
      <img
        src={srcpin}
        className="pinimg absolute bottom-0 right-0 w-20 md:w-32 z-10 transition-transform duration-300"
        alt=""
      />

      {/* Background */}
      <div className="z-0 bg-white w-full h-3/4 rounded-xl"></div>

      {/* Button */}
      <button className="absolute bottom-0 z-20 bg-stickeryellow w-full px-5 py-2 md:py-3 rounded-bl-xl rounded-br-xl text-center">
        <a href={link} className="md:text-xl font-bold text-greenst">{text}</a>
      </button>
    </div>
  );
};

export default ProductStickerCard;
