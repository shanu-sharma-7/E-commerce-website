import React, { useContext, useState } from 'react';
import { assets, products } from '../assets/assets';
import { Link } from 'react-router-dom';

import { SearchContext } from '../Context/Contextprovide';
import Footer from '../Components/Footer';



const Placeorder = () => {
  const {cartAmount} = useContext(SearchContext)

  const [method , setMethod] = useState()

  const alertFn =()=>{
    if(!method){
      alert("Please choose payment method") 
      return;
    }
    
  }
  return (
  <div className='ml-5'>
  <div className='flex flex-col sm:flex-row justify-around '>
    <div >
      <div>
        <p className='text-gray-600 sm:text-3xl text-center  mt-10'>DELIVERY  <span className='text-gray-800'>INFORMATION-----</span></p>
      </div>
      <div className='flex    mt-5  gap-5'>
      <input className='border-2 pl-2' type="text" placeholder='First name' />
      <input className='border-2 pl-2' type="text" placeholder='Last name' />
      </div>
      <div className=' flex flex-col  '>
      <input className='border-2 pl-2 mt-5 sm:w-full w-4/6' type="email" placeholder='E-mail' />
      <input className='border-2 pl-2 mt-5 sm:w-full w-4/6 ' type="text" placeholder='Street' />
      
      </div>
      <div className='flex w-1/2 justify-between mt-5 gap-4'>
      <input className='border-2 pl-2  ' type="text" placeholder='City' />
      <input className='border-2 pl-2 ' type="text" placeholder='State' />
      
      </div>

      <div className='flex w-1/2 justify-between mt-5 gap-4'>
      <input className='border-2 pl-2  ' type="number" placeholder='Zipcode' />
      <input className='border-2 pl-2 ' type="text" placeholder='Country' />
      
      </div>
      <div className=' flex flex-col'>
      
      <input className='border-2 pl-2 mt-5 sm:w-full w-4/6' type="number" placeholder='Phone' />
      
      </div>
    </div>

    <div className='flex  gap-3 mt-20 sm:ml-60 '>
<div>
      <p className=' text-gray-400 text-2xl w-80 '>CART <span className='text-gray-700'>TOTALS ----</span></p>
      <div className='flex justify-between mt-3 border-b-2 mb-3 item-center text-gray-600'>
        <p>Subtotal</p>
        <p>${cartAmount()}.00</p>
      </div>
      <div className='flex justify-between mt-3 border-b-2 mb-3 text-gray-600'>
        <p>Shipping fee</p>
        <p>$10.00</p>
      </div>
      <div className='flex justify-between mt-3 border-b-2 mb-3 font-bold'>
        <p>Total</p>
        <p>${cartAmount() === 0 ? 0 : cartAmount()+10}.00</p>
      </div>
      
      <div>
      <p className='mt-10 text-xl text-gray-600 '>PAYMENT METHOD -----</p>
    </div>
    <div className='flex flex-row  mt-4 gap-2  p-2  items-center '>
      <img onClick={()=>setMethod('razorpay' )} className={`border-2 ${method==='razorpay' ?'border-green-300' :''}` } src={assets.razorpay_logo} alt="" />
      <img onClick={()=>setMethod('stripe' )} className={`border-2 ${method==='stripe' ?'border-green-300' :''}` } src={assets.stripe_logo} alt="" />
      <p onClick={() => setMethod('cod')} className={`border-2 text-center pt-2 text-gray-600  w-40 ${method==='cod' ?'border-green-300' :''} `}>CASH ON DELIVERY</p>
    </div>
<button onClick={() => { if (method) {setMethod('placeorder');} alertFn()}}   className={` mt-5  text-lg p-2 pl-10 item-center pr-10 sm:ml-40 ml-60 ${method==='placeorder' ?' bg-green-500' :'bg-black text-white '}`}>Place Order</button>
      </div>
      
      </div>
      </div>
     
    <Footer/>
    </div>
  );
}

export default Placeorder;

