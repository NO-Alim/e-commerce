import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import tv from '../../assets/tv.png';
const SingleCartItem = () => {
  return (
    <div className="flex gap-3 bg-slate-900/5 p-2 rounded-md">
      <div>
        <img src={tv} alt="tv" className="w-32" />
      </div>
      <div className=" space-y-2">
        <h1 className="text-lg font-semibold">Product Name</h1>
        <div className="w-20 flex border rounded-md items-center justify-between">
          <span className="text-xl flex-1 text-center">+</span>
          <input
            type="number"
            className="flex-1 w-full focus:outline-none text-center"
            value="1"
          />
          <span className="text-xl flex-1 text-center">-</span>
        </div>
        <h1 className="text-lg font-semibold">$233.99</h1>
        <div>
          <i className="text-xl">
            <AiTwotoneDelete />
          </i>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
