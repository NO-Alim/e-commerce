import React from 'react';
import { FaCartPlus, FaSearch, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import tv from '../../assets/tv.png';

const ProductCart = ({ width }) => {
  const navigate = useNavigate();
  return (
    <div
      className={` w-full bg-white rounded-md border border-slate-900/10 group cursor-pointer shadow-inner drop-shadow-md`}
      style={{ minWidth: `${width}px` }}
      onClick={() => navigate('/product/1')}
    >
      <div className="relative overflow-hidden">
        <img src={tv} alt="tv" className="w-full" />
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
      </div>
      <div className="p-3 bg-white group-hover:bg-slate-900/10 all rounded-b-md space-y-3">
        <h2 className="text-base font-bold text-gray-900">
          LInen-blend jumpsuit
        </h2>
        <div>
          <h1 className="text-xl text-gray-500 line-through">$100.00</h1>
          <h1 className="text-xl font-semibold text-slate-900">$190</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <i className=" text-yellow-500">
              <FaStar />
            </i>
            <i className=" text-yellow-500">
              <FaStar />
            </i>
            <i className=" text-yellow-500">
              <FaStar />
            </i>
            <i className=" text-yellow-500">
              <FaStar />
            </i>
          </div>
          <span>(2 Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
