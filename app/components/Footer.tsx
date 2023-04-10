import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center text-md my-10 font-bold'>
     <p>© 2023 All Rights Reserved</p>
     <div className='flex text-2xl mt-3 gap-3'>
        <AiFillInstagram />
        <AiOutlineTwitter />
     </div>
    </div>
  )
}

export default Footer