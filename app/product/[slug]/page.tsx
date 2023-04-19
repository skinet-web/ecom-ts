'use client'

import  {useState, useEffect} from 'react'
import { urlFor, client } from '@/lib/client';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';


async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == $slug][0]`;
    const params = {slug}
    const res = await client.fetch(query, params);
    
    return res
}



 

export default  function page({params } : {params: {slug:string}}) {
  
  const [index, setIndex] = useState(0)
  
  const [data, setData] = useState<Products | null>(null);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext() ;
  
  
  useEffect(() => {
    async function fetchData() {
      const data = await getData(params.slug);
      setData(data);
    }
    fetchData();
  }, [params.slug]);

  return (
    <div>
      {data && (
        <>
        <div className='flex flex-col lg:flex-row justify-center items-start mt-10 gap-10'>
          <div className='flex flex-col justify-center items-start'>
            <div className='bg-secondarycolor rounded-xl '>
               <Image src={urlFor(data.image && data.image[index]).url()} width='300' height='300' alt='product-image'/>
            </div>
            <div className='flex  mt-5 gap-5 '>
            {data.image?.map((item:string, index:number) => (
            <Image
            className='flex  justify-start items-start bg-secondarycolor rounded-xl w-20 object-contain' 
            src={urlFor(item).url()} 
            width='250' height='250' 
            alt='product_image' 
            key={`${item} + ${index}`}
            onMouseEnter={() => setIndex(index)}
            />
            ))}        
            </div>
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
              <p className='text-justify w-[30rem]'>{data.details}</p>
              <h1 className='text-red-700 font-bold text-xl'>{data.price} lei</h1>
            </div>            
            <div className='flex justify-start items-center'>
              <h1>Quantity:</h1>
              <p className='flex justify-start items-center'>
                <span onClick={decQty}><AiOutlineMinus /></span>                
                <span>{qty}</span>
                <span onClick={incQty}><AiOutlinePlus /></span>
              </p>             
            </div>
            <div className='flex gap-5'>
              <button className='w-40 py-2  rounded-md border-red-700 border-2 text-red-700'>Add to cart</button>
              <button className='w-40 py-2  rounded-md bg-red-700  text-white'>Buy now</button>
            </div>
          </div>
        </div>
        
          
         


          
        </>
      )}
    </div>
  )
}

