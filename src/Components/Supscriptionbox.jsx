import React from 'react'

const Supscriptionbox = () => {

    const onSubmitHandler =(e) =>{
        e.preventDefault();
    }
  return (
    <div>
      <p className='text-center pt-20 font-extrabold text-xl pb-10'>Subscribe now & get 20% off</p>
      <p className='text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet..</p>
      <form onSubmit={onSubmitHandler} className='text-center pt-10  '>

      <input className='border-2-gray-400  py-3 outline-none border-2 w-1/2 ' type="email" placeholder='Enter your email  ' required />
      <button className='bg-black text-white px-10 py-4' type='submit'> SUBSCRIBE </button>

      </form>
    </div>
  )
}

export default Supscriptionbox
