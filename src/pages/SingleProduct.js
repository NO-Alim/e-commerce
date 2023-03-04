import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/global/Layout';
import DescriptionAndReview from '../components/SingleProduct/DescriptionAndReview';
import ImageContainer from '../components/SingleProduct/ImageContainer';
import Informations from '../components/SingleProduct/Informations';
import Error from '../components/ui/Error';
import Loading from '../components/ui/Loading';
import { useGetProductQuery } from '../features/products/productApi';
// import MayLike from '../components/SingleProduct/MayLike';

const SingleProduct = () => {
  const { id } = useParams();
  const { isError, isLoading, error, data: product } = useGetProductQuery(id);

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

  if (!isLoading && !isError && product) {
    content = (
      <Layout>
        <div className="min-h-[50vh] my-10 space-y-10">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <ImageContainer product={product} />
            </div>
            <div className="flex-1">
              <Informations product={product} />
            </div>
          </div>
          <div>
            <DescriptionAndReview />
          </div>
          <div>{/* <MayLike /> */}</div>
        </div>
      </Layout>
    );
  }
  return content;
};

export default SingleProduct;
