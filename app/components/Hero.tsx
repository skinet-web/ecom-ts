

import { } from 'react'
import { client } from '../../lib/client.js'
import Product from './Product';

async function getData() {
  const query = '*[_type == "product"]';
  const res = await client.fetch(query);

  return res
}



export default async function Hero() {

  const data: Products[] = await getData() 

 
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <h1 className='text-3xl text-green-700'>Best Seller Products</h1>
      <p className='mb-10'>Description</p>
      <div className='flex flex-wrap justify-center items-center'>
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      
    </div>
  )
}



