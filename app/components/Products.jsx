import React from 'react';
import Image from './Image';

const Products = ({ product }) => {
  return (
    <div>
      <div className='border border-slate-600 flex flex-col justify-center items-center h-[22rem]'>
        <Image product={product} />
        <h2>{product.title}</h2>
      </div>
    </div>
  );
};

export default Products;
