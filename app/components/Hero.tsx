import React from 'react'
import { FunctionComponent } from 'react'

const Hero: FunctionComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-green-700'>Best Seller Products</h1>
      <p>Lorem ipsum Lorem ipsum </p>
      <div className=''>
        {['Products 1', 'Products 2'].map((product) => (
          <div key={product}>
            {product}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Hero