import React from 'react';
import ProductCart from '../Home/ProductCart';

const MayLike = () => {
  return (
    <div className=" space-y-5">
      <h1 className="text-3xl text-center font-semibold">You May Also Like</h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default MayLike;
