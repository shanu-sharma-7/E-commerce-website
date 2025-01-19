import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

const Productitem = ({id ,image , name , price }) => {
    
    
  return (
    
      <Link className='text-gray-700 cursor-pointer' to={`/products/${id}`}>
      
        <img className='hover:scale-110' src={image[0]} alt="" />
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>${price}</p>
      
      
      


      </Link>
    
  );
}

export default Productitem;
