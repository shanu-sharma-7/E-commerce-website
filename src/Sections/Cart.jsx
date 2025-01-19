import React, { useContext, useState } from 'react';
import { SearchContext } from '../Context/Contextprovide';
import { assets, products } from '../assets/assets';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cartItem , setCartItem ,updateQuantity ,cartAmount } = useContext(SearchContext)

  return (
    <div className='ml-5'>
      <div>

<p className='text-gray-400 text-2xl mb-5 mt-7'>YOUR <span className='text-gray-700'>CART ----</span></p>
</div>

      
      {

        cartItem.map((item , index ) =>(
         
         <div key={index} >
         
         < div className='flex  border-t-2 border-b-2 gap-5'>
          <img className='w-40 h-40  mt-2 mb-2' src={item.image[0]} alt="" />
          <div>
         <p className='mt-5 text-gray-600'>{item.name}</p>
         <p>${item.price}</p>
         <div className='flex'>
          <p className='mt-2 text-gray-700'>Size :- </p>
         <p className='  w-5 text-center mt-2'>{item.size}</p>
         </div>
         </div>
         <input onChange={(e)=> updateQuantity(item._id , item.size , e.target.value)} className='border-2 h-8 w-20 m-10 sm:ml-40 mt-20'  type="number" min={1} value={item.quantity} />
         <img onClick={()=> updateQuantity(item._id , item.size , 0)} className='h-5 mt-20 sm:ml-10 mr-5' src={assets.bin_icon} alt="" />
         </div>
</div>
        ))
      }

      <div className='flex justify-center gap-3 mt-20 sm:ml-60 item-center '>
<div >
      <p className=' text-gray-400 text-2xl w-80 '>CART <span className='text-gray-700'>TOTALS ----</span></p>
      <div className='flex justify-between mt-3 border-b-2 mb-3 text-gray-600'>
        <p>Subtotal</p>
        <p>${cartAmount()}.00</p>
      </div>
      <div className='flex justify-between mt-3 border-b-2 mb-3 text-gray-600'>
        <p>Shipping fee</p>
        <p>$10.00</p>
      </div>
      <div className='flex justify-between mt-3 border-b-2 mb-3 font-bold'>
        <p>Total</p>
        <p>${cartAmount()===0 ? 0 : cartAmount()+10}.00</p>
      </div>
      <Link to={'/placeorder'}><button className='bg-black text-white p-2 ml-60 mt-4'>Proceed To Payment</button></Link>
      </div>
      </div>


      <Footer/>
    </div>


  );
}

export default Cart;
