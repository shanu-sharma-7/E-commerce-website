import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, products } from '../assets/assets';
import Footer from '../Components/Footer';
import { SearchContext } from '../Context/Contextprovide';

const Products = () => {

  const {productsId} = useParams();
  

  const product = products.find((item) => item._id === productsId)
 
  const [size , setSize] = useState('')

  const {addCart } = useContext(SearchContext);

  if(!product){
    return <p>Product not found</p>
  }

  return (

    <div className='ml-5 '>
    <div className='flex flex-col sm:flex-row gap-10 '>
      

        <img className='w-2/6 item-center' src={product.image} alt="" />
      

<div>
<h1 className='font-bold sm:text-2xl '>{product.name}</h1>

      <div className='flex mt-2 h-4'>
    <img  src={assets.star_icon} />
    <img  src={assets.star_icon} />
    <img  src={assets.star_icon} />
    <img  src={assets.star_icon} />
    <img src={assets.star_dull_icon} />
    <p className='text-sm ml-2 pb-2' >(122)</p>
      </div>

<p className='font-bold sm:text-2xl mt-5 mb-5'>${product.price}</p>
<p className='text-gray-600 w-80  mb-7'>{product.description}</p>


<p className='text-gray-800 sm:text-xl'>Select size</p>

<div className='flex gap-5  mt-5'>
{product.sizes.map(( item  , index) => (

  <button key={item} onClick={() => setSize(item)} className={`border-2 bg-gray-200 p-2  ${item===size ? 'border-black' : ''}`}  > {item}</button>
))}

</div> 

<button onClick = {() => addCart(product , size)} className='mt-10 bg-black text-white  h-10 w-40 text-center'>ADD TO CART</button>

<div className='text-gray-600 mt-5'>
  <p>100% Original product</p>
  <p>Cash on delivery is available on this product</p>
  <p>Easy return and exchange policy within 7 days</p>
</div>
      
       </div>
       </div>


<div className='flex  mt-20 '>
  <p className='font-bold border-2 p-3'>Description</p>
  <p className='border-2 p-3'>Review (122)</p>
</div>
<div className='border-2  sm:w-full  p-5 text-gray-500'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias dicta nostrum sapiente unde similique quas, deleniti corporis id soluta distinctio eius vitae sed voluptatum expedita. Vel quos consectetur iste nemo laborum optio dolorem harum fugiat aperiam nostrum doloribus, corrupti, ullam voluptates quibusdam? Consequatur earum commodi aliquid, aliquam nihil ab?</p>
<p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio, blanditiis veniam accusamus tempore quae magnam. Ad perspiciatis corrupti quod quisquam ea eum odit cum ipsum ipsa quibusdam! Placeat sint iusto odio quos animi commodi incidunt, esse sit minus vero!</p>
</div>


<Footer/>

    </div>
  );
}

export default Products;
