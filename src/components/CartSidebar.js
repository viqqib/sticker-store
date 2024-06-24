'use client'

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Image from "next/image";
import { removeFromCart, addToCart } from "@/redux/slices/cartSlice";

export default function CartSidebar() {
    const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const addToCartHandler = (product, qty) => {
        dispatch(addToCart({ ...product, qty }));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="fixed top-0 right-0 w-52 h-full bg-stickeryellow shadow-lg border-l-gray-600 overflow-scroll">
            <div className="py5 px-2">
                {loading ? (
                    <div>Loading...</div>
                ) : cartItems.length === 0 ? (
                    <div>Cart is Empty</div>
                ) : (
                    <>
                        <div className="p-2 flex flex-col items-center border-b border-b-gray-600">
                            <div>Subtotal</div>
                            <div className="font-bold text-orange-700">{itemsPrice}</div>
                            <div>
                                <Link href="/cart" className="w-full text-center p-1 rounded-2xl border-2">
                                    Go To Cart
                                </Link>
                            </div>
                        </div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="p-2 flex flex-col items-center border-b border-b-gray-600">
                                <Link href={`/product/${item.id}`} className="flex items-center">
                                    <Image src={item.image} alt={item.image} width={100} height={100} className="p-1" />
                                </Link>
                                <select
                                    value={item.qty}
                                    onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                                >
                                    {[...Array(item.countInStock).keys()].map((c) => (
                                        <option value={c + 1} key={c + 1}>
                                            {c + 1}
                                        </option>
                                    ))}
                                </select>
                                <button className="px-2 py-2 bg-red-500 rounded-md" onClick={() => removeFromCartHandler(item.id)}>Delete</button>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
