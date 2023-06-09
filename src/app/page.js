import React from 'react';

import { client } from '../../lib/client';
import { Product, FooterBanner, HeroBanner } from '../../components';

const page = async () => {
  // Fetch 
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Best Selling Product</h2>
        <p>Pick your new speaker</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>) }
      </div>
      
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
};


  

export default page