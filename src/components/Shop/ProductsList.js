import { Pagination } from 'antd';
import React from 'react';
import ProductCart from '../Home/ProductCart';

const ProductsList = ({ products }) => {
  return (
    <div className=" rounded-md p-5 bg-slate-900/5 space-y-10">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {products.map((item, ind) => {
          return <ProductCart key={item.id} product={item} />;
        })}
      </div>
      <div className=" text-end">
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsList;
