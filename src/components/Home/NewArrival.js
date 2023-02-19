import React from 'react';
import ProductCart from './ProductCart';

const NewArrival = () => {
  return (
    <div className="rounded-md p-5 bg-slate-900/5">
      <div className=" space-y-5">
        <h1 className="text-3xl text-center">New Arrival</h1>
        <div className="flex items-center justify-center gap-3">
          <h1 className=" relative text-lg text-gray-500 font-semibold cursor-pointer hover:text-slate-900 all">
            All
          </h1>
          <h1 className=" relative text-lg text-gray-500 font-semibold cursor-pointer hover:text-slate-900 all">
            Clothing
          </h1>
          <h1 className=" relative text-lg text-gray-500 font-semibold cursor-pointer hover:text-slate-900 all">
            Bags
          </h1>
          <h1 className=" relative text-lg text-gray-500 font-semibold cursor-pointer hover:text-slate-900 all">
            Accessories
          </h1>
          <h1 className=" relative text-lg text-gray-500 font-semibold cursor-pointer hover:text-slate-900 all">
            All
          </h1>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        <div className="w-full text-center">
          <button className="px-4 py-2 rounded-md border border-slate-900 font-semibold hover:bg-slate-900 hover:text-white all">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
