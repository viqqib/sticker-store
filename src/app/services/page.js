'use client'

import docIcon from '../../../public/images/documentIcon.svg';
import stickerIcon from '../../../public/images/stickerprint.svg';
import Image from 'next/image';
import StoreHeader from '../../components/StoreHeader'

export default function Services() {
    return (
       <div className='flex'>
        <StoreHeader text="Services" backUrl='/' cartDisplay='opacity-0 cursor-default' />

         <div className='mt-44'>
           

           <div className='w-full px-5 md:px-40 py-5'>
               <div className='bg-stickeryellow rounded-md flex flex-col md:flex-row items-center p-5'>
                   <div className='md:w-1/3 flex justify-center mb-5 md:mb-0'>
                       <Image width={100} height={100} src={docIcon} alt="Document Icon" />
                   </div>
                   <div className='md:w-2/3 px-5'>
                       <h1 className='font-bold text-greenst mb-5 text-center md:text-left'>
                           Kamu dapat print dokumen A4 di sini dengan mengirimkannya melalui email atau WhatsApp kami. Kami menawarkan layanan pencetakan cepat dan berkualitas tinggi, sehingga dokumenmu akan terlihat profesional dan rapi. Kami juga menyediakan berbagai pilihan kertas dan warna untuk memenuhi kebutuhanmu.
                       </h1>
                       <div className='flex justify-center md:justify-start'>
                           <a href="https://wa.me/085791290386" target="_blank" rel="noopener noreferrer">
                               <button className='border-2 border-solid border-greenst px-5 py-3 rounded-lg font-extrabold hover:bg-greenst duration-300 text-greenst hover:text-creamst'>
                                   Hubungi WhatsApp Kami
                               </button>
                           </a>
                       </div>
                   </div>
               </div>
           </div>

           <div className='w-full px-5 md:px-40 py-5'>
               <div className='bg-stickeryellow rounded-md flex flex-col md:flex-row items-center p-5'>
                   <div className='md:w-1/3 flex justify-center mb-5 md:mb-0'>
                       <Image width={100} height={100} src={stickerIcon} alt="Sticker Icon" />
                   </div>
                   <div className='md:w-2/3 px-5'>
                       <h1 className='font-bold text-greenst mb-5 text-center md:text-left'>
                           Selain dokumen, kami juga menyediakan layanan pencetakan stiker berkualitas tinggi. Kamu dapat mencetak stiker dengan berbagai ukuran dan desain sesuai kebutuhanmu. Kami menggunakan bahan berkualitas untuk memastikan stiker yang tahan lama dan menarik. Hubungi kami melalui email atau WhatsApp untuk informasi lebih lanjut.
                       </h1>
                       <div className='flex justify-center md:justify-start'>
                           <a href="https://wa.me/085791290386" target="_blank" rel="noopener noreferrer">
                               <button className='border-2 border-solid border-greenst px-5 py-3 rounded-lg font-extrabold hover:bg-greenst duration-300 text-greenst hover:text-creamst'>
                                   Hubungi WhatsApp Kami
                               </button>
                           </a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </div>
    );
}
