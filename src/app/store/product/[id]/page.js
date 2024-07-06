'use client'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoading } from '@/redux/slices/cartSlice'; 
import { data } from '@/utils/data';
import StoreHeader from '../../../../components/StoreHeader'
import Image from 'next/image';
import ProductRate from "@/components/ProductRate"
import AddToCart from '@/components/AddToCart';
import CartSidebar from '@/components/CartSidebar';



export default function ProductDetailPage({ params: { id }}) {
    const [openSidebar, setOpenSidebar] = useState(false)


    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hideLoading()); // use dispatch to hide loading
    }, [dispatch]);


    function handleCartClick() {
        setOpenSidebar(prevState => !prevState); // Toggle the sidebar visibility
    }

    const formatRupiah = (num) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(num);
    };

    const product = data.products.find(x=>x.id === id)
    if(!product){
        return <div>Product Not Found</div>
    }
    return (
        <div className='flex pb-20 md:h-screen'>
            <StoreHeader  cartIcon={openSidebar ? 'faXmark' : 'faShoppingCart'} badgeDisplay={openSidebar ? 'hidden' : 'flex'} text="Details" backUrl='/store' onClick={handleCartClick} cartMargin={openSidebar ? 'md:mr-40 mr-52 duration-300' : 'mr-0 duration-300'} logoOpacity={openSidebar ? '-ml-52 md:opacity-100 duration-500 opacity-0' : 'opacity-100 duration-300'} />


            <div className='product-card mt-24 md:mt-52 w-full flex items-center justify-center duration-300'>
        
                <div className='px-3 py-3 md:flex bg-creamst text-greenst'>
                    <div className='image-container p-2 bg-stickered mb-5 w-[17rem] h-[17rem] md:w-[24rem] md:h-[24rem]'>
                        <Image alt={product.image} src={product.image} width={100} height={100} className='object-cover w-full'/>
                    </div>
                    
                    <div className=' md:pl-5 md:pt-2 md:pr-3'>
                        <h1 className='text-4xl font-extrabold text-stickered mb-2'>{formatRupiah(product.price)}</h1>
                        <h1 className='w-[17rem] md:w-full font-medium text-xl flex-wrap'>{product.name}</h1>

                        <div className='mt-2'>
                        <table>
                            <tbody>
                            <tr>
                                <td className='pr-4'>Size</td>
                                <td className=''>:</td>
                                <td className='px-3'>{product.size}</td>
                            </tr>
                            <tr>
                                <td className='pr-4'>Type</td>
                                <td>:</td>
                                <td className='px-3'>{product.type}</td>
                            </tr>
                            <tr>
                                <td className='pr-4'>Category</td>
                                <td>:</td>
                                <td className='px-3'>{product.categories}</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>

                        <p className='w-[17rem] md:w-[20rem] text-sm md:h-20 mt-4'>{product.description}</p>

                        <div className='mt-2 mb-5'><ProductRate rate={product.rate} count={product.numReviews}/>
                        
                        </div>

                        <AddToCart product={product} redirect={false} />
                    </div>

                </div>
                
            </div>
            <CartSidebar display={openSidebar ? 'static' : 'hidden'}/>
            
        </div>
    )
}