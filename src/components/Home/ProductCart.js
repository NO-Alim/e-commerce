import { Rate } from 'antd';
import React from 'react';
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { precisionRound } from '../utils/PricisionRound';

const ProductCart = ({ width, product }) => {
  const navigate = useNavigate();
  //product destructure
  const {
    name,
    price,
    productImage,
    hoverImage,
    description,
    offerPercentage,
    productType,
    onSale,
    id,
  } = product || {};

  return (
    <div
      className={`w-full h-full bg-white rounded-md border border-slate-900/10 group cursor-pointer shadow-inner drop-shadow-md flex flex-col`}
      style={{ minWidth: `${width}px` }}
    >
      <div className="relative overflow-hidden">
        <div className=" h-44 flex items-center justify-center">
          <img
            src={productImage}
            alt={name}
            className=" object-fill"
            onClick={() => navigate(`/product/${id}`)}
          />
        </div>
        <div className="absolute w-full h-12 bottom-0 sm:-bottom-12 group-hover:bottom-0 left-0 all">
          <div className=" w-32 mx-auto bg-slate-900 h-full rounded-md flex justify-center items-center border z-10">
            <button className="flex-1 flex items-center justify-center text-white hover:text-[yellow] all h-full">
              <i>
                <FaCartPlus />
              </i>
            </button>
            <span className=" h-5 border-l"></span>
            <button className="flex-1 flex items-center justify-center text-white hover:text-[yellow] all h-full">
              <i>
                <FaSearch />
              </i>
            </button>
          </div>
        </div>
        {onSale && (
          <div className=" absolute top-5 left-5 w-10 h-10 bg-red-600 text-white text-sm flex items-center justify-center rounded-full">
            Sale
          </div>
        )}
      </div>
      <div className="p-3 bg-white group-hover:bg-slate-900/10 all rounded-b-md space-y-3 flex-1 w-full">
        <h2
          className="text-base font-bold text-gray-900"
          onClick={() => navigate(`/product/${id}`)}
        >
          {name?.length < 20 ? `${name}` : `${name.substring(0, 19)}...`}
        </h2>
        <div onClick={() => navigate(`/product/${id}`)}>
          <h1
            className={`text-xl  ${
              offerPercentage ? 'line-through text-gray-500' : 'text-slate-900'
            }`}
          >
            ${price}
          </h1>
          {offerPercentage && (
            <h1 className="text-xl font-semibold text-slate-900">
              $
              {precisionRound(
                Number(price) - (Number(price) * Number(offerPercentage)) / 100,
                2
              )}
            </h1>
          )}
        </div>
        <div className="flex flex-col">
          <Rate allowHalf defaultValue={2.5} />
          <span>(2 Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
