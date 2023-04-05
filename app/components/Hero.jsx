

import { React} from 'react'
import { client } from '../../lib/client.js'

async function getData() {
  const query = '*[_type == "product"]';
  const res = await client.fetch(query);

  return res
}




export default async function Hero() {

  const data = await getData()

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-green-700'>Best Seller Products</h1>
      <p>Lorem ipsum Lorem ipsum </p>
      <div className=''>
        {data?.map((product) => (
          <div key={product}>
            {product.name} 
          </div> 
        ))}
      </div>
      {/* {console.log(post)} */}
    </div>
  )
}



