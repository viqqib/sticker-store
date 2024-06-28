"use client";

import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export default function ServiceCard({ link, image, alt, title }) {
  return (
    <Link href={link} passHref>
      <div className="w-[22rem] h-40  flex md:mb-12 justify-center items-center relative cursor-pointer">
        <div className="bg-stickeryellow h-20 text-greenst  hover:text-creamst md:h-32 rounded-md w-56 md:w-96 flex justify-around hover:bg-stickered duration-300 items-center">
          <span className="md:static hidden"></span>
          <span></span>
          <Image src={image} alt={alt} width={100} height={100} className="w-32 md:w-56 absolute md:-left-16 right-52" />
          <h1 className="md:text-2xl font-bold ">{title}</h1>
        </div>
      </div>
    </Link>
  );
}

ServiceCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

{/* <Link href={link} passHref>
<div className="w-[22rem] h-40 flex justify-center items-center relative cursor-pointer">
  <div className="bg-stickeryellow h-32 rounded-md w-96 flex justify-around hover:bg-stickered hover:text-creamst duration-300 items-center">
    <span></span>
    <span></span>
    <Image src={image} alt={alt} width={230} height={230} className="absolute -left-16" />
    <h1 className="text-2xl font-bold text-greenst">{title}</h1>
  </div>
</div>
</Link> */}
