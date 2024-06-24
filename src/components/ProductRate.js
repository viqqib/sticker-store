'use client'

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

export default function ProductRate( { rate, count} ) {
    return (
        <div className='flex text-greenst'>
            <Rating style={{ maxWidth:70 }} value={rate} readOnly/> 
         
        </div>
    )
}

// {count}{''}