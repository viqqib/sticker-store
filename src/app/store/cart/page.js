'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { addToCart, removeFromCart, hideLoading } from '../../../redux/slices/cartSlice';
import StoreHeader from '@/components/StoreHeader';

export default function CartPage() {
    const dispatch = useDispatch();
    const { loading, cartItems } = useSelector((state) => state.cart);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!loading) {
            setIsLoading(false);
        } else {
            dispatch(hideLoading());
        }
    }, [loading, dispatch]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const addToCartHandler = async (product, qty) => {
        dispatch(addToCart({ ...product, qty }));
    };

    // Calculate itemsPrice
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    // Calculate fee (IDR 100 per product)
    const fee = cartItems.length * 100;

    // Total price including fee
    const totalPrice = itemsPrice + fee;

    // Format prices to IDR
    const formatToIDR = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    // Truncate item name
    const truncateName = (name) => {
        return name.length > 27 ? `${name.substring(0, 27)}...` : name;
    };

    return (
        <div className='flex h-full mb-36'>
            <StoreHeader text="Cart" backUrl='/store' cartDisplay='opacity-0 cursor-default' />

            <div className='mt-24 md:mt-32 w-full px-5'>
                <div className='bg-stickeryellow px-4 py-2'>
                    <h1 className='text-4xl font-serif font-bold mb-1 text-greenst'>Your Cart</h1>
                    {isLoading ? (
                        <div>Loading....</div>
                    ) : cartItems.length === 0 ? (
                        <div>
                            Cart is Empty.
                            <Link href='/store'>Go Shopping</Link>
                        </div>
                    ) : (
                        <div className='w-full'>
                            <div className='overflow-x-auto'>

                                <table className='w-full text-sm mb-4'>
                                    <tbody>
                                        <tr>
                                            <td className='text-greenst'>Total ( {cartItems.reduce((a, c) => a + c.qty, 0)} Items ) :</td>
                                            <td className='text-right text-stickered font-black'>{formatToIDR(itemsPrice)}</td>
                                        </tr>
                                        <tr>
                                            <td className='text-greenst'>Fee & Packaging :</td>
                                            <td className='text-right text-stickered font-black'>{formatToIDR(fee)}</td>
                                        </tr>
                                        <tr className=''>
                                            <td className='text-greenst'>Total Price :</td>
                                            <td className='text-right text-stickered font-black'>{formatToIDR(totalPrice)}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                {cartItems.map((item) => (
                                    <ul key={item.id}>
                                        <li>
                                            <div className='h-[104px] mb-3 flex border-r-2 border-b-2 border-t-2 border-dashed border-stickered'>
                                                <Link href={`product/${item.id}`} className=''>
                                                    <div className='w-[90px] h-[100px] bg-stickered flex justify-center items-center'>
                                                        <Image src={item.thumbnail} alt={item.name} width={80} height={80} />
                                                    </div>
                                                </Link>
                                                <div className=''>
                                                    <div className='ml-2 mt-[2px] block'>
                                                        <h1 className='font-medium text-greenst text-sm'>{truncateName(item.name)}</h1>
                                                        <span className='text-stickered font-extrabold text-3xl'>{formatToIDR(item.price)}</span>
                                                    </div>
                                                    <div className='ml-2 mt-2'>
                                                        <select
                                                            name=""
                                                            className='rounded-sm border-stickered border-solid border text-[10px] py-1 x-2 mr-2'
                                                            value={item.qty}
                                                            onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                                                            id="">
                                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                                <option value={x + 1} key={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <button className='py-1 px-3 bg-stickered rounded-sm text-[10px] text-creamst hover:bg-creamst hover:text-stickered duration-300'
                                                            onClick={() => removeFromCartHandler(item.id)}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                ))}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
