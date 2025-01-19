import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [ search , setSearch] = useState('')
  const [cartItem , setCartItem] = useState([])

  const addCart = (item , size) =>{

    if(!size){
      alert('Please select a size');
      return;
    }

    setCartItem((prevCart) =>{

      const exitingIndex = prevCart.findIndex((cartItem) => cartItem._id === item._id && cartItem.size === size);
      if (exitingIndex > -1) {
        const updateCart = [...prevCart];
        updateCart[exitingIndex].quantity += 1;
        return updateCart;
      }
      else{
        return [...prevCart , {...item , size , quantity: 1}];
      }
    }
    )
  }
  
const getCartNumber =() =>{

  if(cartItem.length<1){
    return
  }
  return cartItem.length;
}

const updateQuantity  =(id , size , Newquantity) =>{
setCartItem((prevCart) =>{


  const updateCart = prevCart.map((item) => item._id === id && item.size === size ? {...item , quantity : Number(Newquantity)} : item)
  .filter((item) => item.quantity > 0);
  return updateCart;
})

}

const cartAmount =() =>{
  return cartItem.reduce((total,item) => total + item.price * item.quantity , 0)
}
  
  return (
    <SearchContext.Provider value={{ showSearch, setShowSearch , search , setSearch ,cartItem ,addCart , getCartNumber , updateQuantity ,cartAmount}}>
      {children}
    </SearchContext.Provider>
  );
};
