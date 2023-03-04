import React from 'react';
import { useGetProductsQuery } from '../../features/products/productApi';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import ProductCart from './ProductCart';

const TrendyProducts = () => {
  //fetch data
  const { isError, error, isLoading, data } = useGetProductsQuery();
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
        <Error message={error.message} />
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
      <div className="grid grid-rows-1 grid-flow-col gap-5 overflow-x-scroll w-full scrollbar-hide">
        {products.map((item, ind) => {
          return <ProductCart width={220} product={item} key={item.id} />;
        })}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md p-5 shadow-inner drop-shadow-md">
      <div className=" space-y-5">
        <h1 className="text-3xl">Trendy Products</h1>
        {content}
      </div>
    </div>
  );
};

export default TrendyProducts;
