import React from 'react';
import Main from '../Components/Main';
import Latestcollection from '../Components/Latestcollection';
import Bestseller from '../Components/Bestseller';
import Exchangepolicy from '../Components/Exchangepolicy';

import Footer from '../Components/Footer';
import Supscriptionbox from '../Components/supscriptionbox';

const Home = () => {
  return (
    <div className='ml-4'>
      
      <Main/>
      <Latestcollection/>
      <Bestseller/>
      <Exchangepolicy/>
      <Supscriptionbox/>
      <Footer/>
    </div>
  );
}

export default Home;
