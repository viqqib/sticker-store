import Link from "next/link"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export default function StoreHeader(props) {
    const { loading, cartItems } = useSelector((state) => state.cart)
    return(
        <div className={`mr-52  w-full bg-creamst border-b-4 border-stickered border-dashed text-greenst z-50`}>

            <div className="px-10 py-7 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Stickoala Store
                </div>

                <div className="text-xl flex relative items-center flex-col cursor-pointer" onClick={props.onClick}>
                        <div className="w-8 border-2 border-stickered text-stickeryellow absolute -right-1  justify-center bg-greenst items-center flex rounded-md h-6 -top-2">
                            <span className="cart-badge  text-stickeryellow  text-[1rem] font-extrabold">
                                {loading ? '' : cartItems.reduce((a,c) => a + c.qty, 0)}
                            </span>
                        </div>
                        <div className="text-[2.5rem]">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                        {/* <Link href='/cart' className="text-[2.5rem]">
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </Link> */}
                </div>

            </div>
        
        
        </div>
    )
}

                            {/* <span className="cart-badge  text-stickeryellow  text-[1rem] font-extrabold">
                            {loading ? '' : cartItems.reduce((a,c) => a + c.qty, 0)}
                        </span> */}