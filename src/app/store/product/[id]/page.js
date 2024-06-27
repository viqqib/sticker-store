'use client'
import React, {useState} from 'react';
import { data } from '@/utils/data';
import StoreHeader from '../../../../components/StoreHeader'
import Image from 'next/image';
import ProductRate from "@/components/ProductRate"
import AddToCart from '@/components/AddToCart';
import CartSidebar from '@/components/CartSidebar';


export default function ProductDetailPage({ params: { id }}) {
    const [openSidebar, setOpenSidebar] = useState(false)
    
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
        <div className='flex'>
            <StoreHeader text="Details" backUrl='/store' onClick={handleCartClick} cartMargin={openSidebar ? 'md:mr-40 mr-52 duration-300' : 'mr-0 duration-300'} logoOpacity={openSidebar ? 'md:opacity-100 duration-300 opacity-0' : 'opacity-100 duration-300'} />


            <div className='product-card mt-40 w-full flex items-center justify-center'>
        
                <div className='px-3 py-3 bg-creamst text-greenst'>
                    <div className='image-container p-2 bg-stickered mb-5' style={{ width: "17rem", height: "17rem" }}>
                        <Image alt={product.image} src={product.image} width={100} height={100} className='object-cover w-full'/>
                    </div>
                    <h1 className='text-4xl font-extrabold text-stickered mb-2'>{formatRupiah(product.price)}</h1>
                    <h1 className='w-[17rem] font-medium text-xl flex-wrap'>{product.name}</h1>

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

                    <p className='w-[17rem] text-sm mt-4 mb-3'>{product.description}</p>

                    <div className='mt-2 mb-5'><ProductRate rate={product.rate} count={product.numReviews}/>
                    
                    </div>

                    <AddToCart product={product} redirect={false} />

                </div>
                
            </div>
            <CartSidebar display={openSidebar ? 'static' : 'hidden'}/>
            
        </div>
    )
}