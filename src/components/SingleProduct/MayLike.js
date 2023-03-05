import React from 'react';
import { useGetRelatedProductsQuery } from '../../features/products/productApi';
import ProductCart from '../Home/ProductCart';
import Error from '../ui/Error';
import Loading from '../ui/Loading';

const MayLike = ({ productType }) => {
  //fetch related product
  const {
    data: relatedProducts,
    isError,
    isLoading,
    error,
  } = useGetRelatedProductsQuery({
    tags: productType,
  });

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
        <Error message={error.message} />
      </div>
    );
  }

  if (!isLoading && !isError && relatedProducts?.length > 0) {
    content = (
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {relatedProducts.map((item, ind) => {
          return <ProductCart product={item} key={item.id} />;
        })}
      </div>
    );
  }

  return (
    <div className=" space-y-5">
      <h1 className="text-3xl text-center font-semibold">You May Also Like</h1>
      {content}
    </div>
  );
};

export default MayLike;
