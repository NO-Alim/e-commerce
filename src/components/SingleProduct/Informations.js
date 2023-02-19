import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaStar,
  FaYoutube,
} from 'react-icons/fa';

const Informations = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-2xl">Product Name</h1>
        </div>
        <div className="flex items-center gap-3">
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
        <div>
          <h1 className="text-2xl">$89.99</h1>
        </div>
        <div>
          <p className=" text-gray-600 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quod
            ab sequi debitis unde quas eum voluptatem. Placeat, tempora
            blanditiis!
          </p>
        </div>
        <div className="flex gap-3">
          <h4 className="text-lg text-gray-600">Qty:</h4>
          <div className="border border-gray-300 flex  items-center justify-between px-3 w-32">
            <button className="flex-1 text-xl focus:outline-none text-start">
              +
            </button>
            <input
              type="number"
              className="flex-1 w-full focus:outline-none text-center"
            />
            <button className="flex-1 text-xl focus:outline-none text-end">
              -
            </button>
          </div>
        </div>
        <div>
          <button className=" bg-slate-900/5 text-slate-900 font-semibold border border-slate-900 all hover:bg-slate-900 hover:text-white px-4 py-2 rounded-md text-base">
            ADD TO CART
          </button>
        </div>
        <div className="text-lg flex gap-3">
          <h4>Category:</h4>
          <h4 className="text-gray-600">Women, Accessories, Shoes</h4>
        </div>
        <div className="flex gap-3 items-center">
          <h4 className="text-lg">Share:</h4>
          <div className="flex gap-1">
            <span>
              <i className="text-xl cursor-pointer">
                <FaFacebook />
              </i>
            </span>
            <span>
              <i className="text-xl cursor-pointer">
                <FaInstagram />
              </i>
            </span>
            <span>
              <i className="text-xl cursor-pointer">
                <FaYoutube />
              </i>
            </span>
            <span>
              <i className="text-xl cursor-pointer">
                <FaPinterest />
              </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;
