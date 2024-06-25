import React from "react"
import Link from "next/link"
import { useSelector } from "react-redux"


export default function ProductHeader() {
    const { loading, cartItems } = useSelector((state) => state.cart)
    return(
        <header>
            <nav className="w-96 flex justify-between items-center py-6 px-7 shadow-md bg-creamst text-greenst border-b-4 border-stickered border-dashed justify">
                <h1 className="font-medium font-serif text-4xl cursor-pointer duration-300">
                <Image src={logoKoala} alt="Stickoala Logo" width={40} height={40} />
                            Stickoala Store
                </h1>   

                <div className="text-xl">
                        <span className="cart-badge">
                            {loading ? '' : cartItems.reduce((a,c) => a + c.qty, 0)}
                        </span>
                        <Link href='/cart' className="text-xl">
                        Cart
                        </Link>
                </div>
            
                             

            </nav>
           
        </header>
    )
}
