import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { SearchContext } from '../Context/Contextprovide';

const Searchbar = () => {

const {showSearch , setShowSearch , search , setSearch} = useContext(SearchContext);


  return showSearch ? (
  <div>
    
    <div className='flex'>
      
<div className='flex border-2 rounded-full w-1/2 ml-80 justify-between pl-4 pr-4 h-10 pt-1.5 '>

    <input value={search} onChange={(e) => setSearch(e.target.value)} className='outline-none pb-2 w-full  ' type="text" placeholder='Search' />
    <img className='w-6 h-6 cursor-pointer ' src={assets.search_icon} alt="" />
    
</div>
<img onClick={()=> setShowSearch(false)} className=' h-5 mt-2.5 ml-4' src={assets.cross_icon} alt="" />

    </div>

    </div>  
) :null 
}

export default Searchbar;
