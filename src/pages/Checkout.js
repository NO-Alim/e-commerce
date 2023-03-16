import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/global/Layout';
import { precisionRound } from '../components/utils/PricisionRound';
import { totalPriceCalculate } from '../components/utils/toatalPirceCalculate';
import { reload } from '../features/localStorage/localStorage';

const Checkout = () => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('cartList'))
  );
  const { reloader } = useSelector((state) => state.localStorage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.clear('cartList');
    dispatch(reload());
    navigate('/');
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('cartList'));
    setCartList(list);
  }, [reloader]);

  let content;

  if (!cartList || cartList?.length < 1) {
    content = (
      <Layout>
        <div className=" min-h-[70vh] flex items-center justify-center">
          <h1 className="text-2xl text-red-400">Your Cart is Empty</h1>
        </div>
      </Layout>
    );
  } else {
    content = (
      <Layout>
        <div className="py-5 space-y-10">
          <h1 className="p-2 text-lg border border-slate-900 border-dashed inline-block">
            Have a coupon?{' '}
            <span className=" text-red-400 cursor-pointer">
              Click here to enter your code
            </span>
          </h1>
          <form
            className="flex flex-col md:flex-row gap-5"
            onSubmit={handleSubmit}
          >
            <div className=" space-y-5 flex-1">
              <h3 className="text-xl font-semibold">Billing Details</h3>
              <div className="flex flex-col gap-5 md:flex-row">
                <div className=" flex-1">
                  <label htmlFor="firstName" className=" text-gray-500">
                    First Name *
                  </label>
                  <input
                    className="checkoutInput"
                    type="text"
                    name="firstName"
                    required
                  />
                </div>
                <div className=" flex-1">
                  <label htmlFor="lastName" className=" text-gray-500">
                    Last Name *
                  </label>
                  <input
                    className="checkoutInput"
                    type="text"
                    name="lastName"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className=" text-gray-500">
                  Company Name (optional)
                </label>
                <input className="checkoutInput" type="text" name="company" />
              </div>
              <div>
                <label htmlFor="country" className=" text-gray-500">
                  Country *
                </label>
                <input
                  className="checkoutInput"
                  type="text"
                  name="country"
                  required
                />
              </div>
              <div>
                <label htmlFor="street" className=" text-gray-500">
                  Street address *
                </label>
                <input
                  className="checkoutInput"
                  type="text"
                  name="street"
                  required
                />
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex-1">
                  <label htmlFor="city" className=" text-gray-500">
                    Town / City *
                  </label>
                  <input
                    className="checkoutInput"
                    type="text"
                    name="city"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="state" className=" text-gray-500">
                    State *
                  </label>
                  <input
                    className="checkoutInput"
                    type="text"
                    name="state"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex-1">
                  <label htmlFor="post" className=" text-gray-500">
                    Postcode / ZIP *
                  </label>
                  <input
                    className="checkoutInput"
                    type="number"
                    name="post"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className=" text-gray-500">
                    Phone *
                  </label>
                  <input
                    className="checkoutInput"
                    type="number"
                    name="number"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className=" text-gray-500">
                  Email address *
                </label>
                <input
                  className="checkoutInput"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="note" className=" text-gray-500">
                  Order notes (optional)
                </label>
                <textarea className="checkoutInput" name="note"></textarea>
              </div>
            </div>
            <div className=" md:w-[350px] bg-gray-100 p-5 space-y-5">
              <h1 className="text-xl font-semibold">Your Order</h1>
              <hr />
              <div className=" space-y-2">
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">Product</h4>
                  <h4 className="text-lg font-semibold">Total</h4>
                </div>
                <hr />
                {cartList?.length > 0 &&
                  cartList.map((item, ind) => {
                    return (
                      <div key={item.id}>
                        <div className="flex justify-between">
                          <h4 className=" text-gray-700 cursor-pointer">
                            {item.name?.length < 13
                              ? `${item.name}`
                              : `${item.name.substring(0, 12)}...`}
                          </h4>
                          <h4 className="text-gray-700">
                            $
                            {precisionRound(
                              Number(item.price) -
                                (Number(item.price) *
                                  Number(item?.offerPercentage)) /
                                  100,
                              2
                            ).toFixed(2)}
                          </h4>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
              </div>
              <div className=" space-y-2">
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">Subtotal:</h4>
                  <h4 className="text-lg font-semibold">
                    $
                    {cartList && cartList?.length > 0
                      ? totalPriceCalculate(cartList)
                      : 0}
                  </h4>
                </div>
                <hr />
              </div>
              <div className=" space-y-2">
                <div className="flex justify-between">
                  <h4 className="text-lg">Shipping:</h4>
                  <h4 className="text-lg">Free</h4>
                </div>
                <hr />
              </div>
              <button className=" w-full text-center border border-slate-900 py-2 text-lg all hover:text-white hover:bg-slate-900">
                Proceed to Checkout
              </button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
  return content;
};

export default Checkout;
