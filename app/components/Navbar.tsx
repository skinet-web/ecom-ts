import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex m-5 justify-between items-center'>
        <div className=''>
            Ecommerce Logo
        </div>
        <div className='text-2xl'>
            <AiOutlineShopping />
        </div>
    </div>
  )
}

export default Navbar