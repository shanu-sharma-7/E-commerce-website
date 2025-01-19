import React, { useContext, useState } from 'react';
import {assets} from '../assets/assets'
import { Link, Links, NavLink } from 'react-router-dom';
import { SearchContext } from '../Context/Contextprovide';
const Navbar = () => {

  const [visible , setVisible] = useState(false);

const {setShowSearch ,getCartNumber } = useContext(SearchContext);


  return (
    <div className='flex justify-between py-7 font-medium'>
      <Link to="/"> <img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className='hidden sm:flex gap-5 text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>


      </ul>


      <div className=' flex  gap-6'>
      <img onClick={()=> setShowSearch(true)}  src={assets.search_icon} className=' h-6 w-5 cursor-pointer' alt="" />
      <div className='group relative'>
      <Link to='/login'><img src={assets.profile_icon} className=' h-6 w-5 cursor-pointer ' alt="" /></Link>
      <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
        <p className='cursor-pointer hover:text-black'>MY PROFILE</p>
        <p className='cursor-pointer hover:text-black'>ORDER</p>
        <p className='cursor-pointer hover:text-black'>LOGOUT</p>
        </div>

      </div> 
      </div>

      <Link to='cart' className='relative'>
      <img src={assets.cart_icon} className=' h-6 w-5 cursor-pointer' alt="" />
      <p className='absolute left-2 bottom-4 w-5 text-center bg-neutral-600 text-white rounded-full text-[10px]'>{getCartNumber()}</p>
      </Link>
      <img onClick={() => setVisible(true)} src={assets.menu_icon}  className='h-6 w-5 cursor-pointer sm:hidden' alt="" />

      
      </div>
  
     <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        
        <div onClick={() => setVisible(false)} className='flex gap-3 cursor-pointer'>
        <img className='h-5 rotate-180' src={assets.dropdown_icon} alt="" />
             
             <p >Back</p>
        </div>
          <div onClick={() => setVisible(false)} className='  gap-4 p-3 cursor-pointer'>
           
            <div>
              <NavLink className='  flex py-2 pl-6 border' to='/'> HOME</NavLink>
              <NavLink className='flex py-2 pl-1 border' to='/collection'> COLLECTION</NavLink>
              <NavLink className='flex py-2 pl-6 border' to='/about'> ABOUT</NavLink>
              <NavLink className=' flex py-2 pl-3 border' to='/contact'> CONTACT</NavLink>
              </div>
        
        </div>
     </div>
    </div>
  )
}

export default Navbar;
