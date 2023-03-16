import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/global/Layout';
import ProductCart from '../components/Home/ProductCart';
import Error from '../components/ui/Error';
import Loading from '../components/ui/Loading';
import { useGetMoreProductsQuery } from '../features/products/productApi';

const SearchResult = () => {
  const { str } = useParams();
  //fetch data
  const { isError, isLoading, data } = useGetMoreProductsQuery({
    name: str,
  });
  //useGetProduct return { data,totalCount}. here destructure data
  const { data: products, totalCount } = data || {};

  //dynamic content based on data fetching.
  let content;

  if (isLoading) {
    content = (
      <div className=" min-h-[70vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = (
      <div className=" min-h-[70vh] flex items-center justify-center">
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
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {products.map((item, ind) => {
          return <ProductCart product={item} key={item.id} />;
        })}
      </div>
    );
  }
  return (
    <Layout>
      <div className=" min-h-[70vh] py-10">{content}</div>
    </Layout>
  );
};

export default SearchResult;
