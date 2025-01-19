import React from 'react';
import { assets } from '../assets/assets';

const Main = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      <div className=' flex flex-col items-center justify-center w-full '>
      <p className='px-30 text-xl font-semibold  '>------ OUR BESTSELLER</p>
      <p className='px-30 text-5xl italic '>Latest Arrivals</p>
      <p className='px-30 text-xl font-semibold '>SHOP NOW ------</p>
      </div>

     <img className=' sm:w-1/2' src={assets.hero_img} alt="" />

    </div>
  );
}

export default Main;
