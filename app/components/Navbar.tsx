'use client'

import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='flex m-5 justify-between items-center'>
        <div className=''>
            Ecommerce Logo
        </div>
        <button className='' onClick={() => setShowCart(true)}>
            <AiOutlineShopping className='text-2xl'/>
            <span className='absolute top-4 bg-red-700 rounded-full w-5
            text-center text-white text-sm'>{totalQuantities}</span>
        </button>
        { showCart && <Cart />}
    </div>
  )
}

export default Navbar