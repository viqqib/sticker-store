'use client'

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Image from "next/image";
import { removeFromCart, addToCart } from "@/redux/slices/cartSlice";
import emptyCartImg from "../../public/images/products/empty-cart-svgrepo-com 1.svg"

export default function CartSidebar(props) {
    const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const addToCartHandler = (product, qty) => {
        dispatch(addToCart({ ...product, qty }));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
<div
      className={`z-50 fixed top-0 right-0 w-52 h-full bg-stickeryellow shadow-lg border-l-4 border-dashed border-stickered overflow-scroll transform transition-transform duration-300 ${
        props.display === 'static' ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
            <div className="py-5 px-2">
                {loading ? (
                    <div>Loading...</div>
                ) : cartItems.length === 0 ? (
                    <div className="text-greenst flex justify-center items-center mt-28 flex-col font-bold"><h1>Keranjang Kosong</h1>
                    <Image className={'mt-10'} src={emptyCartImg}  width={100} height={100} />
                    </div>
                ) : (
                    <>
                        <div className="p-2 flex flex-col items-center border-b border-b-gray-600">
                            <div className="text-greenst text-xl">Total</div>
                            <div className="font-bold text-orange-700">{itemsPrice}</div>
                            <div className="mt-5 mb-5">
                                <Link href="/store/cart" className="w-full text-center p-2 rounded-xl hover:bg-greenst hover:text-creamst duration-300 border-2 border-greenst text-greenst ">
                                    Go To Cart
                                </Link>
                            </div>
                        </div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="p-2 flex items-center border-b border-b-gray-600">
                                <Link href={`store/product/${item.id}`} className="flex items-center justify-center mr-1 w-28">
                                    <Image src={item.image} alt={item.image} width={100} height={100} className="" />
                                </Link>
                               <div>
                                    <div className="text-greenst text-xs font-semibold mb-2">{item.name}</div>
                                    <div className="flex">
                                    <select
                                        value={item.qty}
                                        onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                                        className="px-2 rounded-md py-2 mr-2"
                                    >
                                        {[...Array(item.countInStock).keys()].map((c) => (
                                            <option value={c + 1} key={c + 1}>
                                                {c + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <button className="px-2 py-2 bg-red-500 rounded-md text-creamst text-sm font-semibold" onClick={() => removeFromCartHandler(item.id)}>Delete</button>
                                </div>
                               </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
