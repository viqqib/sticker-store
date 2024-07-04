import Link from "next/link";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import logoKoala from '../../public/images/logo.svg';
import Image from "next/image";

export default function StoreHeader(props) {
    const { loading, cartItems } = useSelector((state) => state.cart);

    const renderCartIcon = () => {
        switch (props.cartIcon) {
            case 'faShoppingCart':
                return <FontAwesomeIcon icon={faShoppingCart} />;
            case 'faXmark':
                return <FontAwesomeIcon icon={faXmark} />;
            default:
                return null;
        }
    };

    return (
        <div className={`mr-52 fixed w-full bg-creamst border-b-4 border-stickered border-dashed text-greenst z-40`}>
            <div className="md:px-24 px-10 py-5 md:py-7 flex justify-between items-center">
                <a href={props.backUrl}>
                    <div className="md:text-3xl text-xl">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                </a>
                <div className={`text-2xl font-bold flex justify-center ${props.logoOpacity} items-center`}>
                    <Image src={logoKoala} alt="Stickoala Logo" width={40} height={40} className="md:h-9 md:w-9 w-7 h-7" />
                    <h1 className="font-serif text-2xl md:text-3xl ml-1">{props.text}</h1>
                </div>
                <div className={`text-xl flex relative ${props.cartMargin} items-center flex-col cursor-pointer`} onClick={props.onClick}>
                    <div className={`flex ${props.cartDisplay}`}>
                        <div className={`${props.badgeDisplay} h-4 w-5 md:w-8 border-2 border-stickered text-stickeryellow absolute -right-1 justify-center bg-stickered items-center rounded-md md:h-6 -top-1`}>
                            <span className="cart-badge text-stickeryellow text-[0.6rem] md:text-[1rem] font-extrabold">
                                {loading ? '' : cartItems.reduce((a, c) => a + c.qty, 0)}
                            </span>
                        </div>
                        <div className={`md:text-[2.5rem] text-xl`}>
                            {renderCartIcon()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
