import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../features/products/productApi';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import ProductCart from './ProductCart';

const NewArrival = () => {
  const navigate = useNavigate();

  //fetch data
  const { isError, isLoading, data } = useGetProductsQuery();
  //useGetProduct return { data,totalCount}. here destructure data
  const { data: products, totalCount } = data || {};

  //dynamic content based on data fetching.
  let content;

  if (isLoading) {
    content = (
      <div className=" flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = (
      <div className=" flex items-center justify-center">
        <Error />
      </div>
    );
  }

  if (!isLoading && !isError && products?.length === 0) {
    content = (
      <div className=" min-h-[70vh] flex items-center justify-center">
        <Error message="There is no Product Found." />
      </div>
    );
  }

  if (!isLoading && !isError && products?.length > 0) {
    content = (
      <div className=" space-y-5">
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
          {products.slice(0, 4).map((item, ind) => {
            return <ProductCart product={item} key={item.id} />;
          })}
        </div>
        <div className="w-full text-center">
          <button
            className="px-4 py-2 rounded-md border border-slate-900 font-semibold hover:bg-slate-900 hover:text-white all"
            onClick={() => navigate('/shop')}
          >
            Load More
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md p-5 bg-slate-900/5">
      <div className=" space-y-5">
        <h1 className="text-3xl text-center">New Arrival</h1>
        {content}
      </div>
    </div>
  );
};

export default NewArrival;
