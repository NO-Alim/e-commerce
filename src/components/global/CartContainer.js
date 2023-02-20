import React from 'react';
import SingleCartItem from './SingleCartItem';

const CartContainer = () => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl text-center mb-3">Your Cart</h1>
      <div className="flex-1 h-full overflow-y-scroll scrollbar-hide space-y-2">
        <SingleCartItem />
        <SingleCartItem />
        <SingleCartItem />
        <SingleCartItem />
        <SingleCartItem />
        <SingleCartItem />
        <SingleCartItem />
      </div>
      <hr className="my-5" />
      <div className="flex-1">
        <h1 className="text-2xl text-center mb-3">CartTotal</h1>
        <hr className="my-3" />
        <div className="flex items-center justify-between text-xl">
          <h1>Subtotal:</h1>
          <h1>$233.44</h1>
        </div>
        <div className="flex items-center justify-between text-xl">
          <h1>Shipping:</h1>
          <h1>$233.44</h1>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between text-xl">
          <h1>Total</h1>
          <h1>$345.33</h1>
        </div>
        <div className=" text-center mt-5">
          <button className="px-4 py-2 bg-slate-900/10 text-slate-900 border border-slate-900 font-semibold all hover:bg-slate-900 hover:text-white rounded-md text-lg">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
