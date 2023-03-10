import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { totalPriceCalculate } from '../utils/toatalPirceCalculate';
import SingleCartItem from './SingleCartItem';

const CartContainer = () => {
  const { reloader } = useSelector((state) => state.localStorage);
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('cartList'))
  );

  //reload
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('cartList'));
    setCartList(list);
  }, [reloader]);
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl text-center mb-3">Your Cart</h1>
      <div className="flex-1 h-full overflow-y-scroll scrollbar-hide space-y-2">
        {cartList && cartList?.length > 0 ? (
          cartList.map((item, ind) => {
            return <SingleCartItem product={item} key={item.id} />;
          })
        ) : (
          <h1 className="text lg text-center font-semibold">Cart is Empty.</h1>
        )}
      </div>
      <hr className="my-5" />
      <div className="flex-1">
        <h1 className="text-2xl text-center mb-3">CartTotal</h1>
        <hr className="my-3" />
        <div className="flex items-center justify-between text-xl">
          <h1>Subtotal:</h1>
          <h1>
            {/* calculate total price */}$
            {cartList && cartList?.length > 0
              ? totalPriceCalculate(cartList)
              : 0}
          </h1>
        </div>
        <div className="flex items-center justify-between text-xl">
          <h1>Shipping:</h1>
          <h1>$50</h1>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between text-xl">
          <h1>Total</h1>
          <h1>${totalPriceCalculate(cartList) + 50}</h1>
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
