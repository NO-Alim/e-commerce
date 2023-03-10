/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetAll,
  setCategory,
  setGender,
  setOnSale,
} from '../../features/filter/filterSlice';
import { setPagination } from '../../features/pagination/paginationSlice';
import debounceHandler from '.././utils/debounceHandler';
const Filter = () => {
  //redux state
  const { category, gender, minPrice, maxPrice, brand, onSale, offer } =
    useSelector((state) => state.filter);
  const dispatch = useDispatch();

  //local state
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeGender, setActiveGender] = useState('');
  const [onSaleChecked, setOnSaleChecked] = useState(false);

  //handler function
  const handleOnSaleDispatch = (value) => {
    dispatch(setOnSale(value));
    dispatch(setPagination(1));
  };

  const handleCategoryDispatch = (value) => {
    dispatch(setCategory(value));
    dispatch(setPagination(1));
  };

  const handleGenderDispatch = (value) => {
    dispatch(setGender(value));
    dispatch(setPagination(1));
  };

  const handleCategory = useCallback(
    debounceHandler(handleCategoryDispatch, 1000),
    []
  );
  const handleGender = useCallback(
    debounceHandler(handleGenderDispatch, 1000),
    []
  );

  const handleOnSale = useCallback(
    debounceHandler(handleOnSaleDispatch, 1000),
    []
  );

  const handleReset = () => {
    setActiveCategory('all');
    setActiveGender('');
    setOnSaleChecked(false);
    dispatch(resetAll());
    dispatch(setPagination(1));
  };

  //must be change later & come form server
  const categoryList = ['all', 'cloth', 'bag', 'shoe', 'accessories'];
  const genderList = ['women', 'men', 'baby'];

  return (
    <div className=" bg-slate-900/5 rounded-md p-5 min-w-[250px] space-y-5 text-slate-600">
      <div className=" space-y-2">
        <h1 className="text-xl font-semibold">Shop by Department</h1>
        <hr />
        <div className=" space-y-1">
          {categoryList.map((category, ind) => {
            return (
              <h1
                className={`text-lg capitalize cursor-pointer hover:text-slate-900 all ${
                  activeCategory === category && 'font-semibold'
                }`}
                key={ind}
                onClick={() => (
                  // eslint-disable-next-line no-sequences
                  setActiveCategory(category), handleCategory(category)
                )}
              >
                {category}
              </h1>
            );
          })}
          <hr />
          {genderList.map((gender, ind) => {
            return (
              <h1
                className={`text-lg capitalize cursor-pointer hover:text-slate-900 all ${
                  activeGender === gender && 'font-semibold'
                }`}
                key={ind}
                // eslint-disable-next-line no-sequences
                onClick={() => (setActiveGender(gender), handleGender(gender))}
              >
                {gender}
              </h1>
            );
          })}
          <hr />
          <Checkbox
            onChange={(e) => (
              setOnSaleChecked(!onSaleChecked), handleOnSale(e.target.checked)
            )}
            checked={onSaleChecked}
          >
            OnSale
          </Checkbox>
          {(category || gender || onSale !== undefined) && (
            <div>
              <hr />
              <button
                className=" mt-3 px-3 py-2 bg-slate-900 text-white rounded-md ring-white right-1"
                onClick={handleReset}
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
