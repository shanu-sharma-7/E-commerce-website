import React, { useContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import Productitem from './Productitem';



    const Latestcollection  = () => {
        
        
        
        const[latestProducts , setLatestProducts] = useState([]);

        useEffect(() => {
       setLatestProducts(products.slice(0,10));
        },[])

    
  return (
    <div className='py-10'>
    <div className='text-3xl  text-center  '>
      
      <p className='text-gray-500' >LATEST  <span className='text-gray-800'>COLLECTION</span> <span>----</span></p>
      
    </div>
    
    <p className=' px-40 text-sm text-center text-gray-600'>
    
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsum ipsum Lorem ipsum dolor sit amet. ..
    </p>
     
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10'>

      {

latestProducts.map((item ,index)=>(
<Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>

))
      }
    </div>
    
    </div>
  );
}

export default Latestcollection;
