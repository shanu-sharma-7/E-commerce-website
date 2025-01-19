import React from 'react';
import { assets, products } from '../assets/assets';
import Footer from '../Components/Footer';

const About = () => {

  const onSubmitHandler =(e) =>{
    e.preventDefault();
}
  return (
    <div className='ml-5'>
      <div className='flex  flex-col sm:flex-row' >
     <img className='sm:w-80 mb-5 mt-20 ' src={assets.about_img} alt="" />

     <div className='sm:ml-20 mt-5  '>
      <p className='text-gray-500 text-2xl'>ABOUT <span className='text-gray-800'>US -----</span></p>

      <p className='text-gray-600 mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut explicabo impedit. Aut vel ipsum perferendis et. Dolores ex vel ut cupiditate earum distinctio, quam</p>
      <p className='text-gray-600 mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, neque minus tempore non dicta consequatur debitis illo vitae totam laborum.</p>

      <p className='font-bold mt-5 mb-5'>Our mission</p>
      <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis ab odit minima corrupti maxime.</p>
     </div>

      </div>


<p className='text-gray-500 text-2xl mt-20'>WHY <span className='text-gray-800'>CHOOSE US -----</span></p>

<div className='flex flex-col sm:flex-row  text-center'>

<div className='mt-10 border-2 p-10  '>
<p className='font-bold'>Quality Assurance :</p>
<p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, tempore!</p>
</div>

<div className='mt-10 border-2 p-10 '>
<p className='font-bold'>Convenience :</p>
<p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, tempore!</p>
</div>

<div className='mt-10 border-2 p-10 '>
<p className='font-bold'>Exceptional customer service :</p>
<p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, tempore!</p>
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

export default About;
