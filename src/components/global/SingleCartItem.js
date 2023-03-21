import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useCartHandler from '../../hooks/useCartHandler';
import { precisionRound } from '../utils/PricisionRound';
const SingleCartItem = ({ product }) => {
  const navigate = useNavigate();

  const { name, price, quantity, productImage, id, offerPercentage } =
    product || {};

  const [addToCart, deleteCartItem, decreaseCartItem, increaseCartItem] =
    useCartHandler();

  return (
    <div className="flex gap-3 bg-slate-900/5 p-2 rounded-md">
      <div
        className="flex justify-center items-center bg-white"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img src={productImage} alt={name} className="w-32" />
      </div>
      <div className=" space-y-2">
        <h1
          className="text-lg font-semibold cursor-pointer"
          onClick={() => navigate(`/product/${id}`)}
        >
          {name?.length < 13 ? `${name}` : `${name.substring(0, 12)}...`}
        </h1>
        <div className="w-20 flex border rounded-md items-center justify-between px-1">
          <span
            className="flex-1 text-center cursor-pointer text-sm"
            onClick={() => decreaseCartItem(id, 1)}
          >
            <i>
              <FaMinus />
            </i>
          </span>
          <span>{quantity}</span>
          <span
            className="flex-1 text-center cursor-pointer text-sm flex justify-end"
            onClick={() => increaseCartItem(id, 1)}
          >
            <i>
              <FaPlus />
            </i>
          </span>
        </div>
        <h1 className="text-lg font-semibold">
          $
          {precisionRound(
            Number(price) - (Number(price) * Number(offerPercentage)) / 100,
            2
          ).toFixed(2)}
        </h1>
        <div>
          <i
            className="text-xl cursor-pointer"
            onClick={() => deleteCartItem(id)}
          >
            <AiTwotoneDelete />
          </i>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
