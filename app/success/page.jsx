'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';


const Success = () => {
  
  return (
    <div className="flex bg-[#9CA3AF] justify-center items-center rounded-md w-11/12 h-[20rem] ">
      <div className="flex flex-col 
      justify-center items-center ">
        <p className="text-green-700 text-3xl">
          <BsBagCheckFill />
        </p>
        <h2 className='text-3xl font-bold'>Thank you for your order!</h2>
        <p className="mt-10">Check your email inbox for the receipt.</p>
        <p className="mb-3 ">
          If you have any questions, please email{' '}
          <a className="text-red-700 font-bold" 
          
          href="mailto:order@ecommerce.com">
             order@ecommerce.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" 
          className="bg-red-600 rounded-xl 
          p-2 text-white font-bold mt-4 ">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success