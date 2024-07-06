'use client'
import { data } from '@/utils/data';
import ProductItem from '@/components/ProductItem';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoading } from '@/redux/slices/cartSlice'; 
import CartSidebar from '@/components/CartSidebar';
import StoreHeader from '@/components/StoreHeader';
import { faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";

const Store = () => {
    const { products } = data;
    const dispatch = useDispatch(); // get the dispatch function
    const [openSidebar, setOpenSidebar] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    function handleCartClick() {
        setOpenSidebar(prevState => !prevState); // Toggle the sidebar visibility
    }

    useEffect(() => {
        dispatch(hideLoading()); // use dispatch to hide loading
    }, [dispatch]);

    useEffect(() => {
        let filtered = products;
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(product => product.categories.includes(selectedCategory));
        }
        if (searchQuery) {
            filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        setFilteredProducts(filtered);
    }, [selectedCategory, searchQuery, products]);

    const categories = ['All', ...new Set(products.map(product => product.categories))];

    return (
        <div>
            <StoreHeader 
                cartIcon={openSidebar ? 'faXmark' : 'faShoppingCart'} 
                badgeDisplay={openSidebar ? 'hidden' : 'flex'} 
                text='Store' 
                backUrl="/" 
                onClick={handleCartClick} 
                cartMargin={openSidebar ? 'md:mr-40 mr-52 duration-300' : 'mr-0 duration-300'} 
                logoOpacity={openSidebar ? 'md:opacity-100 -mr-10 duration-300 opacity-0' : 'opacity-100 duration-300'}
            />

            <div className={`flex flex-col transition-margin h-full duration-300 ${openSidebar ? '' : 'mr-0'}`}>
                <div className={`flex mt-24 md:mt-32 gap-5 md:gap-5 flex-wrap pb-10 justify-center px-2 ${openSidebar ? 'md:px-20' : 'md:px-20'}`}>
                    
                <div className='w-[357px] md:w-[1350px] bg-stickered px-5 py-2 filter flex justify-between items-center'>
                        <div className='mr-4'>
                            <label htmlFor="category" className="text-xs mr-2 text-creamst">Category :</label>
                            <select 
                                id="category" 
                                value={selectedCategory} 
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-3 py-2 rounded-md text-greenst bg-stick border border-stickeryellow text-xs focus:outline-none focus:border-blue-500"
                            >
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className='w-[700px] hidden md:flex'></div>

                        <div className='flex-1'>
                            <input 
                                id="search" 
                                type="text" 
                                value={searchQuery} 
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-4 py-2 rounded-md text-greenst bg-creamst border border-stickeryellow text-xs focus:outline-none focus:border-blue-500 w-full"
                                placeholder="Search products..."
                            />
                        </div>
                    </div>


                    {filteredProducts.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            <CartSidebar display={openSidebar ? 'static' : 'hidden'}/>
        </div>
    );
}

export default Store;
