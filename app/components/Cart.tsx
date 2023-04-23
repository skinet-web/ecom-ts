import React from 'react'
import { useStateContext } from '../context/StateContext';

const Cart = () => {
  const {showCart, setShowCart, totalQuantities, cartItems} = useStateContext();
  return (
    <div className='fixed  bg-white w-full h-[50rem] top-0 right-0 z-10'>
      <div className='flex justify-between'>
        <h1>ITEMS IN CART ({totalQuantities})</h1>
        <button onClick={() => setShowCart(false)}  className='text-black mr-10'>
          X
        </button>
      </div>
      <div className='mt-10'>
        {cartItems.map((items:any, i:number) => (
          <div key={items[i]} className='flex justify-between'>             
                <div>
                {items.name}
                
                </div>
                <div className='mr-10'>
                {items.price}
                </div>              
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Cart