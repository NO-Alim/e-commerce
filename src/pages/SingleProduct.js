import React from 'react';
import Layout from '../components/global/Layout';
import DescriptionAndReview from '../components/SingleProduct/DescriptionAndReview';
import ImageContainer from '../components/SingleProduct/ImageContainer';
import Informations from '../components/SingleProduct/Informations';
import MayLike from '../components/SingleProduct/MayLike';

const SingleProduct = () => {
  return (
    <Layout>
      <div className="min-h-[50vh] my-10 space-y-10">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <ImageContainer />
          </div>
          <div className="flex-1">
            <Informations />
          </div>
        </div>
        <div>
          <DescriptionAndReview />
        </div>
        <div>
          <MayLike />
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
