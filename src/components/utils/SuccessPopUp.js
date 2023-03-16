import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import done from '../../assets/done.png';
import { productAddSuccess } from '../../features/localStorage/localStorage';

const SuccessPopUp = () => {
  const { productAdd } = useSelector((state) => state.localStorage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productAdd) {
      setTimeout(() => {
        dispatch(productAddSuccess(false));
      }, 1000);
    }
  }, [productAdd, dispatch]);
  return (
    <div
      className={`fixed w-48 h-10 bg-white shadow-md rounded-md ring-1 ring-slate-900/5  z-20 top-[10vh] all overflow-hidden ${
        productAdd
          ? 'right-[8vw] opacity-100 flex gap-2 items-center justify-center'
          : '-right-52 opacity-0 hidden'
      }`}
    >
      <img src={done} alt="done" className="w-6" />
      <h4 className=" font-semibold">Added Successful</h4>
    </div>
  );
};

export default SuccessPopUp;
