'use client'

import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
import Link from 'next/link'

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='flex m-5 justify-between items-center'>
        <div className=''>
            Ecommerce Logo
        </div>
        <div className=' justify-center items-center'>
          <Link href='/login'>
            <button             
            className='p-1 bg-gray-500 rounded-xl text-white'>
              Login
            </button>
          </Link>
          
          <button className='' onClick={() => setShowCart(true)}>
              <AiOutlineShopping className='text-2xl'/>
              <span className='absolute top-4 bg-red-700 rounded-full w-5
               text-white text-sm'>{totalQuantities}</span>
          </button>
        </div>
        
        
        { showCart && <Cart />}
    </div>
  )
}

export default Navbar