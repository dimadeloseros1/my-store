import React from 'react';
import Image from './Image';
import Link from 'next/link';

const Products = ({ product }) => {
  return (
    <>
    <Link href={`/product/${product.id}`} className=" flex h-96 flex-col p-5 top-20 rounded border group hover:scale-105 transition-transform ease-out duration-200 relative">
      <div>
        <div className='flex flex-col justify-center items-center h-[22rem]'>
          <div className='relative max-h-72 flex-1'>
            <Image product={product} fill/>
          </div>
          <h2 className='truncate w-44'>{product.title}</h2>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Products;
