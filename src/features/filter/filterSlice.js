import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  category: '',
  gender: '',
  minPrice: '',
  maxPrice: '',
  brand: '',
  onSale: undefined,
  offer: undefined,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    resetAll: (state, action) => {
      state.name = '';
      state.category = '';
      state.gender = '';
      state.minPrice = '';
      state.maxPrice = '';
      state.brand = '';
      state.onSale = undefined;
      state.offer = undefined;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setOnSale: (state, action) => {
      state.onSale = action.payload;
    },
    setOffer: (state, action) => {
      state.offer = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  resetAll,
  setName,
  setBrand,
  setCategory,
  setGender,
  setMaxPrice,
  setMinPrice,
  setOffer,
  setOnSale,
} = filterSlice.actions;
