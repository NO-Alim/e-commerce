import React from 'react';
import filter from '.././assets/filter.png';
import Layout from '../components/global/Layout';
import Filter from '../components/Shop/Filter';
import ProductsList from '../components/Shop/ProductsList';
const Shop = () => {
  return (
    <Layout>
      <div className="my-10">
        <div className="flex gap-10 min-h-[50vh] relative">
          <div className="hidden md:block">
            <Filter />
          </div>
          <div className="flex-1">
            <ProductsList />
          </div>
          <div className=" absolute w-full bottom-5 flex justify-center md:hidden">
            <button className="bg-slate-900 flex gap-2 items-center justify-center px-4 py-1  rounded-full focus:outline-none">
              <img src={filter} alt="filter" className="w-4 h-4" />
              <h1 className="text-white text-lg">Filter</h1>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
