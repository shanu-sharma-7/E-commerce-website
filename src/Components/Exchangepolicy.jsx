import React from 'react';
import {assets} from '../assets/assets'

const Exchangepolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around   gap-10 '>
        <div >
      <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
      <p className='text-center '>Easy Exchange Policy</p>
      <p className='text-center text-gray-500'>We offer hassle free exchange policy</p>
      </div>

      <div >
      <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
      <p className='text-center font-bold'>7 Day Return Policy</p>
      <p className='text-center text-gray-500'>We offer 7 day free return policy</p>
      </div>

      <div >
      <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
      <p className='text-center font-bold'>Best Customer Support</p>
      <p className='text-center text-gray-500'>We provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default Exchangepolicy;
