import { Modal } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import filter from '.././assets/filter.png';
import Layout from '../components/global/Layout';
import Filter from '../components/Shop/Filter';
import ProductsList from '../components/Shop/ProductsList';
import Error from '../components/ui/Error';
import Loading from '../components/ui/Loading';
import { useGetMoreProductsQuery } from '../features/products/productApi';
const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { page } = useSelector((state) => state.pagination);
  const { category, onSale, gender } = useSelector((state) => state.filter);

  //fetch data
  const { isError, isLoading, data } = useGetMoreProductsQuery({
    page: page,
    name: '',
    onSale: onSale,
    category: category,
    gender: gender,
  });
  //useGetProduct return { data,totalCount}. here destructure data
  const { data: products, totalCount } = data || {};

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //dynamic content based on data fetching.
  let content;

  if (isLoading) {
    content = (
      <div className="flex-1 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = (
      <div className="flex-1 mt-32">
        <Error />
      </div>
    );
  }

  if (!isLoading && !isError && products?.length === 0) {
    content = (
      <div className="flex-1 mt-32">
        <Error message="There is no Product Found." />
      </div>
    );
  }

  if (!isLoading && !isError && products?.length > 0) {
    content = (
      <div className="flex-1">
        <ProductsList products={products} totalCount={totalCount} />
      </div>
    );
  }
  return (
    <Layout>
      <div className="my-10">
        <div className="flex gap-10 min-h-[50vh] relative">
          <div className="hidden md:block">
            <Filter />
          </div>
          {content}
          <div className=" fixed  left-0 w-full bottom-5 flex justify-center md:hidden">
            <button
              className="bg-slate-900 flex gap-2 items-center justify-center px-4 py-1  rounded-full focus:outline-none"
              onClick={showModal}
            >
              <img src={filter} alt="filter" className="w-4 h-4" />
              <h1 className="text-white text-lg">Filter</h1>
            </button>
          </div>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        okButtonProps={{ style: { background: 'black' } }}
      >
        <Filter />
      </Modal>
    </Layout>
  );
};

export default Shop;
