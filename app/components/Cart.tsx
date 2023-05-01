



import { useStateContext } from '../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import Image from 'next/image';
import getStripe from '../../lib/getStripe'
import  toast  from 'react-hot-toast';
import axios from 'axios';

const Cart = () => {
  
  const {totalPrice, toggleCartItemQuantity, setShowCart, totalQuantities, cartItems, onRemove} = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  
  return (
    <div className='fixed  bg-white w-full h-[50rem] top-0 right-0 z-10 '>
      <div className='mx-10'>
        <div className='flex justify-between  mt-10'>
          <div className='flex gap-3'>
            <span>Your Cart: </span>
            <span className='text-red-600 font-semibold'>({totalQuantities} items)</span>
          </div>
          
          <button onClick={() => setShowCart(false)}  className='text-black '>
            X
          </button>
         
          
        </div>
        {cartItems.length < 1 && (
            <div className='flex flex-col justify-center items-center gap-5' >
                <AiOutlineShopping size={150}/>
                <span className='font-semibold'>Your shopping bag is empty!</span>
                <Link href='/'>
                  <button 
                  className='bg-red-500 rounded-md w-[20rem] h-8 text-white uppercase'
                  onClick={() => setShowCart(false)}
                  >
                    CONTINUE SHOPPING
                  </button>
                </Link>
            </div>
          )} 

            
        <div className='mt-10 flex flex-col gap-10'>
          {cartItems.length >= 1 && cartItems.map((items:any) => (
            <div key={items._id} className='flex '>
                  <Image src={urlFor(items?.image[0]).url()} width='100' height='100' alt='image'
                  className='bg-secondarycolor rounded-xl'/>   
                  <div className='flex flex-col ml-3 w-full'>
                    <div className='flex  justify-between'>
                      <span className=''>{items.name}</span>
                      <span className=''>{items.price} lei</span> 
                    </div>
                      
                    <div className='flex justify-between items-end h-16'>
                      <p className='flex  items-center '>
                        <button className='border-2 w-8 h-5 border-solid text-gray-300
                        border-gray-300 flex justify-center'
                        onClick={() => toggleCartItemQuantity(items._id, 'dec')}
                        ><AiOutlineMinus /></button>                
                        <span 
                        className='border-2 w-8 h-5 border-solid	
                        border-gray-300 flex justify-center items-center'>{items.quantity}</span>
                        <button className='border-2 w-8 h-5 border-solid text-gray-300	
                        border-gray-300 flex justify-center items-center'
                        onClick={() => toggleCartItemQuantity(items._id, 'inc')}
                        ><AiOutlinePlus /></button>
                      </p>
                      <button
                        type="button"
                        className=""
                        onClick={() => onRemove(items)}
                      >
                        <TiDeleteOutline className='text-red-700'/>
                      </button>                       
                    </div> 
                  </div>                            
            </div>
          ))}
          {cartItems.length >= 1 && (
            <div className='flex flex-col '>
              <div className='flex justify-between'>
                <h3>Subtotal:</h3>
                <h3>{totalPrice} lei</h3>
              </div>
              <div className='flex justify-center mt-8'>
                <button
                type='button'
                className='bg-red-500 rounded-md w-[20rem] h-8 text-white uppercase'
                onClick={handleCheckout}>
                Paying with stripe  
                </button>
              </div>
            </div>        
          )}
         </div>       
      </div>     
    </div>
  )
}

export default Cart