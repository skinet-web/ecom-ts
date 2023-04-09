import React from 'react'
import { urlFor, client } from '@/lib/client';
import Image from 'next/image';



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
          <h1>{data.name}</h1>
          {data.image.map((item:string, index:number) => (
            <Image src={urlFor(item).url()} width='250' height='250' alt='product_image' key={`${item} + ${index}`}/>
          ))}
        
        </>
      )}
    </div>
  )
}

