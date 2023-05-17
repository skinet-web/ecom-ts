'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';


const Success = () => {
  
  return (
    <div className="">
      <div className="">
        <p className="">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="">Check your email inbox for the receipt.</p>
        <p className="">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success