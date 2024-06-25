'use client'
import { data } from '@/utils/data';
import ProductItem from '@/components/ProductItem';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoading } from '@/redux/slices/cartSlice'; 
import CartSidebar from '@/components/CartSidebar'
import StoreHeader from '@/components/StoreHeader'

const Store = () => {
    const { products } = data;
    const dispatch = useDispatch(); // get the dispatch function
    const [openSidebar, setOpenSidebar] = useState(false)
    
    function handleCartClick() {
        setOpenSidebar(prevState => !prevState); // Toggle the sidebar visibility
    }

    useEffect(() => {
        dispatch(hideLoading()); // use dispatch to hide loading
    }, [dispatch]);

    return (
        <div>
            <div className={`flex flex-col transition-margin duration-300 ${openSidebar ? 'mr-52' : 'mr-0'}`}>

            <StoreHeader onClick={handleCartClick} margin={"mr-52"}/>
        
            <div className={`flex mt-24 gap-5 md:gap-5 flex-wrap justify-center px-2 ${openSidebar ? 'md:px-4' : 'md:px-20'}`}>
                {products.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
        <CartSidebar display={openSidebar ? 'static' : 'hidden'}/>
        </div>
    );
}

export default Store;
