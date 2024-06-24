'use client'

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/slices/cartSlice";

export default function AddToCart({
    product,
    showQty = true,
    redirect = false,
    increasePerClick = false,
}) {
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state.cart )
    const router = useRouter()

    const [qty, setQty] = useState(1)

    const addToCartHandler = async () => {
        let newQty = qty 
        if(increasePerClick) {
            const existItem = cartItems.find((x) => x.id === product.id)
            if(existItem) {
                if(existItem.qty + 1 <= product.countInStock) {
                    newQty = existItem.qty + 1
                } else {
                    return alert('Habis')
                }
            }
        }
        dispatch(addToCart({ ...product, qty: newQty }))
        if (redirect) router.push('/cart')
    }

    return (
        <>
            {product.countInStock > 0 && showQty && (
                <div className="mb-2 flex justify-between">
                    <div>Qty</div>
                    <div>
                        <select name="" id="" value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        >
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option value={x+1} key={x+1}>
                                    {x+1}
                                </option>
                            ))}
                        </select>{' '}
                    </div>
                </div>
            )}
            <div>
                {product.countInStock > 0 ? (
                    <button
                     onClick={addToCartHandler}
                     className='cursor-pointer w-full bg-greenst text-stickeryellow hover:bg-stickered duration-300 font-bold text-[0.7rem] py-2 md:text-sm md:py-2 mt-1 md:mt-0'>
                    Add To Cart
                    </button>
                ) : (
                    <button disabled>Out Of Stock</button>
                )}
            </div>
        </>
    )
}
