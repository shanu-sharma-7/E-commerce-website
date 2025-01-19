import React, { useState } from 'react';
import { assets, products } from '../assets/assets';
import Footer from '../Components/Footer';

const Contact = () => {

  const[click , setClick] = useState();

  const onSubmitHandler =(e) =>{
    e.preventDefault();
  }
  return (
    <div className='ml-5'>
      
      <p className='text-gray-500 text-2xl text-center'>CONTACT <span className='text-gray-800'>US -----</span></p>
<div className='flex flex-col sm:flex-row mt-20 justify-center gap-10  '>
<img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
<div>
  <p className='font-bold mt-10 mb-5'>Our store</p>
<p className='text-gray-600'>54709 Willms Station</p>
<p className='text-gray-600 mb-5' >Suite 350, Washington, USA</p>
<p className='text-gray-600' >Tel: (415)555-0132</p>
<p className='text-gray-600 mb-5' >Email: admin@clone.com</p>
<p className='font-bold mb-5' >Careers at clone</p>
<p className='text-gray-600 mb-5' >Learn more about our team and job opening</p>
<button onClick={() => setClick(!click)} className={`bg-black text-white p-2 ${click? 'bg-white border-2 border-black text-black' : null}`}>Explore jobs</button>

</div>

</div>
<div>
      <p className='text-center pt-20 font-extrabold text-xl pb-10'>Subscribe now & get 20% off</p>
      <p className='text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet..</p>
      <form onSubmit={onSubmitHandler} className='text-center pt-10  '>

      <input className='border-2-gray-400  py-3 outline-none border-2 w-1/2 ' type="email" placeholder='Enter your email  ' required />
      <button className='bg-black text-white px-10 py-4' type='submit'> SUBSCRIBE </button>

      </form>
    </div>
<Footer/>

    </div>
  );
}

export default Contact;
