import React from 'react';
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className=' flex flex-col sm:flex-row mt-40 justify-around gap-20 '>
      <div>
        <img className='w-40 pb-2 ' src={assets.logo} alt="" />
        <p className='text-gray-700' >Lorem, ipsum dolor sit amet
             consectetur adipisicing elit. Iusto, accusamus dolorem. Qui 
             numquam ad deleniti fugit assumenda optio, at eius?</p>
      </div>
      <div>
        <p className='font-bold text-xl pb-5'>COMPANY</p>
        <ul className='text-gray-700'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
      </div>

      <div>
        <p className='font-bold text-xl pb-5'>GET IN TOUCH</p>
        <ul className='text-gray-700'>
            <li>+1-212-456-9999</li>
            <li>contact@clone.com</li>
        </ul>
      </div>

     
    </div>
    <div>

<p className='mt-20 text-center text-gray-700 sm:text-sm'>Copyright 2024@ clone.com-All Right Reserved</p>
</div>
    </div>
  );
}

export default Footer;
