import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reload } from '../../features/localStorage/localStorage';
import decreaseCartItem from '../utils/decreaseCartItem';
import deleteCartItem from '../utils/deleteCartItem';
import increaseCartItem from '../utils/increaseCartItem';
import { precisionRound } from '../utils/PricisionRound';
const SingleCartItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, price, quantity, productImage, id, offerPercentage } =
    product || {};
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
            onClick={() => (decreaseCartItem(id, 1), dispatch(reload()))}
          >
            <i>
              <FaMinus />
            </i>
          </span>
          <span>{quantity}</span>
          <span
            className="flex-1 text-center cursor-pointer text-sm flex justify-end"
            onClick={() => (increaseCartItem(id, 1), dispatch(reload()))}
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
            onClick={() => (deleteCartItem(id), dispatch(reload()))}
          >
            <AiTwotoneDelete />
          </i>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
