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

            <StoreHeader text='Store' backUrl="/" onClick={handleCartClick} cartMargin={openSidebar ? 'md:mr-40 mr-52 duration-300' : 'mr-0 duration-300'} logoOpacity={openSidebar ? 'md:opacity-100 -mr-10 duration-300 opacity-0' : 'opacity-100 duration-300'}/>

            <div className={`flex flex-col transition-margin duration-300 ${openSidebar ? '' : 'mr-0'}`}>

        
            <div className={`flex mt-32 gap-5 md:gap-5 flex-wrap justify-center px-2 ${openSidebar ? 'md:px-20' : 'md:px-20'}`}>
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
