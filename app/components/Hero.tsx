import React from 'react'
import { FunctionComponent} from 'react'
import { client } from '../../lib/client.js'

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  console.log(products);
  return {
    
    props: { products }
  }
  
}



const Hero: FunctionComponent= () => {

 
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-green-700'>Best Seller Products</h1>
      <p>Lorem ipsum Lorem ipsum </p>
      <div className=''>
        {['Product 1', 'Product 2'].map((product) => (
          <div key={product}>
            {product} 
          </div> 
        ))}
      </div>

    </div>
  )
}



export default Hero