import React, { useState } from 'react';
import Footer from '../Components/Footer';

const Login = () => {
const [signUp , setSignUp] = useState();


  return (
    <div className='ml-5'>
{signUp ? (
<div className=' flex flex-col gap-3 text-center items-center '>
  <p className='text-3xl font-bold  mt-20 mb-5 italic'>Sign Up ----</p>
  <input className='text-gray-600 border-2 border-slate-600  w-1/2 p-2 ' placeholder='Name' type="text" required/>
  <input className='text-gray-600 border-2 border-slate-600  w-1/2 p-2' placeholder='E-mail' type="email" required/>
  <input className='text-gray-600 border-2 border-slate-600  w-1/2 p-2' placeholder='Password' type="text" required />
  <div className='flex sm:gap-40'>
  <p>Forgot your Password?</p>
  <button onClick={(e) => setSignUp(!signUp)} className='pl-8'>login Here</button>
  </div>
  <button className='bg-black text-white p-2 sm:w-1/6 w-2/6 mt-5 '>Sign Up</button>
</div>

):(

<div className=' flex flex-col gap-3 text-center items-center '>
  <p className='text-3xl font-bold  mt-20 mb-5 italic '>Login ----</p>
  
  <input className='text-gray-600 border-2 border-slate-600  w-1/2 p-2' placeholder='E-mail' type="email" required/>
  <input className='text-gray-600 border-2 border-slate-600  w-1/2 p-2' placeholder='Password' type="text" required/>
  <div className='flex sm:gap-40 gap-5'>
  <p>Forgot your Password?</p>
  <button onClick={(e) => setSignUp(!signUp)}>Create Account</button>
  </div>
  <button  className='bg-black text-white p-2 sm:w-1/6 w-2/6 mt-5 '>Sign In</button>
</div>

)}

  <Footer/>    
    </div>
  );
}

export default Login;
