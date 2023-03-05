import { Pagination } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPagination } from '../../features/pagination/paginationSlice';
import ProductCart from '../Home/ProductCart';

const ProductsList = ({ products, totalCount }) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.pagination);

  //pagination click handle
  const handleChange = (page) => {
    dispatch(setPagination(page));
  };
  return (
    <div className=" rounded-md p-5 bg-slate-900/5 space-y-10">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {products.map((item, ind) => {
          return <ProductCart key={item.id} product={item} />;
        })}
      </div>
      <div className=" text-end">
        <Pagination
          defaultCurrent={page}
          total={Number(totalCount)}
          pageSize={8}
          onChange={(page) => handleChange(page)}
        />
      </div>
    </div>
  );
};

export default ProductsList;
