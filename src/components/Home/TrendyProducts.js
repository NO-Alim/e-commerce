import React from 'react';
import ProductCart from './ProductCart';

const TrendyProducts = () => {
  return (
    <div className="bg-white rounded-md p-5 shadow-inner drop-shadow-md">
      <div className=" space-y-5">
        <h1 className="text-3xl">Trendy Products</h1>
        <div className="flex gap-5 overflow-x-scroll w-full scrollbar-hide">
          <ProductCart width={220} />
          <ProductCart width={220} />
          <ProductCart width={220} />
          <ProductCart width={220} />
          <ProductCart width={220} />
          <ProductCart width={220} />
          <ProductCart width={220} />
          <ProductCart width={220} />
          <ProductCart width={220} />
          <ProductCart width={220} />
        </div>
      </div>
    </div>
  );
};

export default TrendyProducts;
