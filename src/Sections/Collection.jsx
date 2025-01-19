import React, { useContext, useEffect, useState } from 'react';
import { assets, products } from '../assets/assets';
import Productitem from '../Components/Productitem';
import Footer from '../Components/Footer'
import Searchbar from '../Components/Searchbar';
import { SearchContext } from '../Context/Contextprovide';

const Collection = () => {

  const {search , showSearch , getCartNumber} = useContext(SearchContext);

  const [allItems , setAllItems] = useState([]);
const[showFilter , setShowFilter] = useState(true);

const [category , setCategory] = useState([]);
const [subCategory , setSubCategory] = useState([]);

const [sortType , setSortType] = useState('relavent');

const togglecategory = (e) =>{
if (category.includes(e.target.value)){
  setCategory(prev=> prev.filter(item => item !== e.target.value))
}
else{
  setCategory(prev=> [...prev , e.target.value])
}


}



const togglesubcategory = (e) =>{
  if (subCategory.includes(e.target.value)){
    setSubCategory(prev=> prev.filter (item => item !== e.target.value))
  }
  else{
    setSubCategory(prev=> [...prev , e.target.value])
  }
  
  
  }


  const applyFilter =() =>{
 let productscopy = products.slice();

if ( showSearch && search) {

  productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
}

 if(category.length> 0){
  productscopy = productscopy.filter(item => category.includes(item.category));
 }

 if(subCategory.length> 0){
  productscopy = productscopy.filter(item => subCategory.includes(item.subCategory));
 }
 setAllItems(productscopy);

  }
  
const sortProduct =() =>{

let copy = products.slice();

switch (sortType) {
case 'low-high' :
  setAllItems(copy.sort((a,b) => (a.price - b.price)))
 break;

 case 'high-low':
  setAllItems(copy.sort((a,b) => (b.price - a.price)))

  break;

  default:
    setAllItems(copy);
    break;

}

}
     

  useEffect(() =>{
  setAllItems(products);

  },[])

  useEffect(() =>{
applyFilter();

  },[category , subCategory , showSearch , search])

    useEffect(() =>{

sortProduct();
    },[sortType])

  return (
<>
    <Searchbar/>

    <div className='pl-5'>
    <div className='mt-10 flex flex-col sm:flex-row '>

       <div className='w-1/2'>
       
         <p onClick={() => setShowFilter(!showFilter)} className='font-bold text-xl mb-10 flex gap-2'>FILTERS

          <img className={` mt-1.5 h-4 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
         </p>

         <div className={`mb-10 border-solid border-2 border-gray-300 pl-5 ${showFilter ? '' : 'hidden'} sm:block` }>
          <p className='mb-5 font-bold text-xl'>CATEGORIES</p>
          
         
          <p className='flex gap-2 text-gray-700'>
          <input onChange={togglecategory} type="checkbox" value="Men"/> Men
          </p>

          <p className='flex gap-2 text-gray-700'>
          <input onChange={togglecategory} type="checkbox" value="Women"/> Women
          </p>

          <p className='flex gap-2 text-gray-700'>
          <input onChange={togglecategory} type="checkbox" value="Kids"/> Kids
          </p>

         </div>

         <div className={`mb-10 border-solid border-2 border-gray-300 pl-5 ${showFilter ? '' : 'hidden'} sm:block`}>

          <p className='mb-5 font-bold text-xl'>TYPE</p>
          

          <p className='flex gap-2 text-gray-700'>
          <input onChange={togglesubcategory} type="checkbox" value="Topwear"/> Topwear
          </p>

          <p className='flex gap-2 text-gray-700'>
          <input onChange={togglesubcategory} type="checkbox" value="Bottomwear"/> Bottomwear
          </p>

          <p className='flex gap-2 text-gray-700'>
          <input onChange={togglesubcategory} type="checkbox" value="Winterwear"/> Winterwear
          </p>
         
         </div>


       </div>
<div>
    <div className='sm:text-2xl ml-20 mb-10 flex justify-between' >
      <p className='text-gray-500' >ALL <span className='text-gray-700' >COLLECTION ----</span></p>
 
     <select onChange={(e) => setSortType(e.target.value)} className='border-2 text-sm sm:py-2 sm:px-2' >
      <option value='relavent' >Sort by: Relavent</option>
      <option value='low-high' >Sort by: Low to High</option>
      <option value='high-low' >Sort by: High to Low</option>
     </select>

    </div>

     <div className='ml-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
     
       {

        allItems.map((item ,index)=>(
          <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          
          ))
                
       }
     </div>
     </div>
     </div>

     <Footer/>
    </div>
    </>
  );
}

export default Collection;
