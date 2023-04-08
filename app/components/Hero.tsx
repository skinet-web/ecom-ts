

import { } from 'react'
import { client } from '../../lib/client.js'
import Product from './Product';

async function getData() {
  const query = '*[_type == "product"]';
  const res = await client.fetch(query);

  return res
}

interface Products {
  name: string;
  product: string;
  _id: string;
  slug: Slug;
  price: number;
  details: string;
  image: string;
}


export default async function Hero() {

  const data: Products[] = await getData() 

 
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-green-700'>Best Seller Products</h1>
      <p></p>
      <div className='flex flex-wrap justify-center items-center'>
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      
    </div>
  )
}



