import React from 'react';

const Filter = () => {
  return (
    <div className=" bg-slate-900/5 rounded-md p-5 min-w-[250px] space-y-5 text-slate-600">
      <div className=" space-y-2">
        <h1 className="text-xl font-semibold">Category</h1>
        <div className=" space-y-1">
          <h1 className=" cursor-pointer hover:text-slate-900 all">All</h1>
          <h1 className=" cursor-pointer hover:text-slate-900 all">Clothing</h1>
          <h1 className=" cursor-pointer hover:text-slate-900 all">Bags</h1>
          <h1 className=" cursor-pointer hover:text-slate-900 all">Shoes</h1>
          <h1 className=" cursor-pointer hover:text-slate-900 all">
            Accessories
          </h1>
        </div>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-semibold">Brand</h1>
        <div className=" space-y-1">
          <h1 className=" cursor-pointer hover:text-slate-900 all">All</h1>
          <h1 className=" cursor-pointer hover:text-slate-900 all">Clothing</h1>
          <h1 className=" cursor-pointer hover:text-slate-900 all">Bags</h1>
          <h1 className=" cursor-pointer hover:text-slate-900 all">Shoes</h1>
          <h1 className=" cursor-pointer hover:text-slate-900 all">
            Accessories
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Filter;
