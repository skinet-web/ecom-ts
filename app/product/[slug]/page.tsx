import React from 'react'
import { urlFor, client } from '@/lib/client';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';



async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == $slug][0]`;
    const params = {slug}
    const res = await client.fetch(query, params);
  
    return res
}


export default async function page({params} : {params: {slug:string}}) {

const data: Products = await getData(params.slug) 

  return (
    <div>
      {data && (
        <>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <div className='left'>
            <Image src={urlFor(data.image[0]).url()} width='200' height='200' alt='product-image'/>
          </div>
          <div className='right'>
            <h1>{data.name}</h1>
            <div className=' flex justify-start items-center'>
              <div className='flex text-red-700'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>            
              <p>(20)</p>
            </div>
            <div>
              <h1>Details:</h1>
              <p className='text-justify'>{data.details}</p>
              <h1 className='text-red-700 font-bold text-xl'>{data.price} lei</h1>
            </div>            
            <div className='flex justify-start items-center'>
              <h1>Quantity:</h1>
              <p className='flex justify-start items-center'>
                <span><AiOutlineMinus /></span>                
                <span>1</span>
                <span><AiOutlinePlus /></span>
              </p>             
            </div>
            <div className='flex gap-5'>
              <button className='w-40 py-2  rounded-md border-red-700 border-2 text-red-700'>Add to cart</button>
              <button className='w-40 py-2  rounded-md bg-red-700  text-white'>Buy now</button>
            </div>
          </div>
        </div>
        
          
         


          {/* {data.image.map((item:string, index:number) => (
            <Image src={urlFor(item).url()} width='250' height='250' alt='product_image' key={`${item} + ${index}`}/>
          ))} */}
        
        </>
      )}
    </div>
  )
}

