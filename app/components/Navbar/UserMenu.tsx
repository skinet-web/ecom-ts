'use client'

import {BiWorld, BiDotsVerticalRounded} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import MenuItems from './MenuItems'


const UserMenu = () => {
 
  const [isOpen, setIsOpen] = useState(false)  

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])


  return (
    <div className='relative'>
      <div className='flex flex-row justify-center items-center gap-3'>        
        <div 
          onClick={toggleOpen}
          className='p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition'>
            <AiOutlineMenu/>           
        </div>
      </div>

      {isOpen && (
        <div className='absolute
        
        rounded-xl
        shadow-md
        w-[10vw]
        
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm'>
           <div>
            <div className='font-semibold'>
                <MenuItems 
                onClick= {() => {}}
                label= 'Sign up'
                />
            </div>           
            <div className='border-b-[1px]'>
            <Link href='/login'>
                <MenuItems 
                    onClick= {() => {}}
                    label= 'Login'
                />
            </Link>
                
            </div>
             <MenuItems 
             onClick= {() => {}}
             label= 'Contact'
             />
             <MenuItems 
             onClick= {() => {}}
             label= 'Help'
             />
           </div>     
        </div>
      )}
    </div>
  )
}

export default UserMenu