import Link from "next/link"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import logoKoala from '../../public/images/logo.svg'
import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function StoreHeader(props) {
    const { loading, cartItems } = useSelector((state) => state.cart)
    return(
        <div className={`mr-52 fixed w-full bg-creamst border-b-4 border-stickered border-dashed text-greenst z-40`}>

            <div className="md:px-24 px-10 py-7 flex justify-between items-center ">
                <a href={props.backUrl}>
                      <div  className="text-3xl mr-3 ">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                      </div>
                    </a>
                <div className={`text-2xl font-bold flex justify-center ${props.logoOpacity} items-center`}>
                    <Image src={logoKoala} alt="Stickoala Logo" width={40} height={40} />
                    <h1 className="font-serif text-3xl ml-1">{props.text}</h1>
                </div>

                <div className={`text-xl flex relative ${props.cartMargin} items-center flex-col cursor-pointer`} onClick={props.onClick}>
                        <div className="w-8 border-2 border-stickered text-stickeryellow absolute -right-1  justify-center bg-greenst items-center flex rounded-md h-6 -top-2">
                            <span className="cart-badge  text-stickeryellow  text-[1rem] font-extrabold">
                                {loading ? '' : cartItems.reduce((a,c) => a + c.qty, 0)}
                            </span>
                        </div>
                        <div className={`text-[2.5rem]`}>
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