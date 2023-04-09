import React, { FC } from 'react'
import Link from 'next/link'
import { client, urlFor } from '../../lib/client.js'
import Image from 'next/image.js'


interface FooterData {
    image: string;
    smallText: string;
    midText: string;
    largeText1: string;
    largeText2: string;
    buttonText: string;
    desc: string;
    product: string;
    discount: number;
    saleTime: string;
  }
  
  interface FooterBannerProps {
    footerData: FooterData;
  }

const FooterBanner: FC<FooterBannerProps> = ({footerData : {smallText, midText, largeText1, largeText2, buttonText, desc, product, discount, saleTime, image}}) => {
    
    return (
    
        <div className= 'flex flex-col md:flex-row  bg-red-600 text-white mx-10 rounded-xl p-3 	'>
            <div className=' flex flex-col md:items-start  md:justify-center md:mx-7'>
                <h3 className='md:text-3xl md:font-semibold '>{smallText}</h3>
                <h1 className='text-4xl font-bold md:text-6xl md:mt-4'>{discount} OFF</h1>
                <p className='md:mt-4'>{saleTime}</p>
            </div>
            <div className='flex justify-center'>
              <Image src={urlFor(image).url()}  width='500' height='500' alt='footer-image' />
            </div>
            
            <div className=' flex flex-col md:items-start md:justify-center ' >                
                    <p className='font-extrabold text-5xl '>{largeText1}</p>
                    <Link href={`/product/${product}`} className=''>
                        <button className='bg-white rounded-xl 
                        p-2 text-red-600 font-bold mt-4 '>
                            {buttonText}
                        </button>
                    </Link>                 
            </div>            
        </div>
    
  )
}

export default FooterBanner