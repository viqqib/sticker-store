'use client'
import { data } from '@/utils/data';
import ProductItem from '@/components/ProductItem';
import ProductHeader from '@/components/ProductHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoading } from '@/redux/slices/cartSlice'; 
// make sure to import your action correctly
import CartSidebar from '@/components/CartSidebar'

const Store = () => {
    const { products } = data;
    const dispatch = useDispatch(); // get the dispatch function

    useEffect(() => {
        dispatch(hideLoading()); // use dispatch to hide loading
    }, [dispatch]);

    return (
        <div>
            <div className="flex flex-col mr-52">
            <ProductHeader />
        
            <div className='flex mt-24 gap-2 md:gap-5 flex-wrap justify-center px-2 md:px-20 mt-10'>
                {products.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
        <CartSidebar />
        </div>
    );
}

export default Store;
