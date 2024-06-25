'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import ProductRate from "./ProductRate"
import AddToCart from './AddToCart'



export default function ProductItem({ product }) {


    if (!product) return null; // Ensure product is defined

    const truncatedName = product.name.length > 21 ? `${product.name.substring(0, 20)}...` : product.name;

    const formatRupiah = (num) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(num);
    };
   
    return (
        <div className="card bg-creamst block md:px-2 md:py-2 py-1 px-1 shadow-md ">
            <Link href={``}>
                <div className='hidden md:flex  justify-center items-center image-container bg-stickered' style={{ width: "12rem", height: "12rem" }}>
                    <img src={product.image} alt="" className='py-1 px-1 rounded-sm object-cover h-48 w-full duration-300' />
                </div>
                <div className='md:hidden image-container bg-stickered' style={{ width: "10rem", height: "10rem" }}>
                    <img src={product.image} alt="" className='rounded-sm object-cover w-full' />
                </div>
            </Link>
            <div className='desc py-1 md:py-2 text-greenst block'>
                <h1 href="" className="text-greenst font-semibold text-[0.8rem] md:text-base">{truncatedName}</h1>
                <div className='space-x-1 -mt-1 md:mt-0 md:mb-1'>
                    <a href={`products/${product.categories}`} className=' py-[0.2rem] md:py-1 px-2 bg-gray-200 text-[0.3rem] md:text-[10px]' >
                        {product.categories}
                    </a>
                    <a href={`products/${product.categories}`} className=' py-[0.2rem] md:py-1 px-2 bg-gray-200 text-[0.3rem] md:text-[10px]' >
                        {product.type}
                    </a>
                </div>
                <h1 className='md:text-3xl text-xl font mb-1 font-extrabold'>
                    {formatRupiah(product.price)}
                </h1>
                <div className='-mt-1 md:my-1'>
                    <ProductRate rate={product.rate} count="7" />
                </div>
                <AddToCart
                    showQty={false}
                    product={product}
                    increasePerClick={true}
                    redirect={false}
                />
            </div>
        </div>
    );
}
