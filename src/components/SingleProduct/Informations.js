import React, { useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaMinus,
  FaPinterest,
  FaPlus,
  FaStar,
  FaYoutube,
} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  productAddSuccess,
  reload,
} from '../../features/localStorage/localStorage';
import addToCart from '../utils/addToCart';
import { precisionRound } from '../utils/PricisionRound';

const Informations = ({ product }) => {
  const {
    name,
    price,
    productImage,
    hoverImage,
    description,
    offerPercentage,
    onSale,
    id,
    productType,
  } = product || {};

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-2xl">{name}</h1>
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
          <div>
            <div className="flex gap-3 items-center">
              <h1
                className={`text-2xl  ${
                  offerPercentage
                    ? 'line-through text-gray-500'
                    : 'text-slate-900'
                }`}
              >
                ${price}
              </h1>
              {offerPercentage && (
                <span className=" text-gray-500">- {offerPercentage}%</span>
              )}
            </div>
            {offerPercentage && (
              <h1 className="text-2xl font-semibold text-slate-900">
                $
                {precisionRound(
                  Number(price) -
                    (Number(price) * Number(offerPercentage)) / 100,
                  2
                )}
              </h1>
            )}
          </div>
        </div>
        <div>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              voluptatibus.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              vero enim est?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab
              dolore vel fuga eum reiciendis vero sit qui molestias modi.
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <h4 className="text-lg text-gray-600">Qty:</h4>
          <div className="border border-gray-300 flex  items-center justify-between px-3 w-32">
            <button
              className="flex-1 text-xl focus:outline-none "
              onClick={handleDecrease}
            >
              <i className="text-sm">
                <FaMinus />
              </i>
            </button>

            <input
              type="number"
              className="flex-1 w-full focus:outline-none text-center"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button
              className="flex-1 text-xl focus:outline-none text-start flex justify-end"
              onClick={() => setCount(count + 1)}
            >
              <i className="text-sm">
                <FaPlus />
              </i>
            </button>
          </div>
        </div>
        <div>
          <button
            className=" bg-slate-900/5 text-slate-900 font-semibold border border-slate-900 all hover:bg-slate-900 hover:text-white px-4 py-2 rounded-md text-base"
            onClick={() => (
              addToCart({ ...product, quantity: count }),
              dispatch(reload(), dispatch(productAddSuccess(true)))
            )}
          >
            ADD TO CART
          </button>
        </div>
        <div className="text-lg flex gap-3">
          <h4>Category:</h4>
          <h4 className="text-gray-600">{productType}</h4>
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
