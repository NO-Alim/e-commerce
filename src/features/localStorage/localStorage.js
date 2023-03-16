import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reloader: true,
  productAdd: true,
};

const localStorageSlice = createSlice({
  name: 'localStorage',
  initialState,
  reducers: {
    reload: (state, action) => {
      state.reloader = !state.reloader;
    },
    productAddSuccess: (state, action) => {
      state.productAdd = action.payload;
    },
  },
});

export default localStorageSlice.reducer;
export const { reload, productAddSuccess } = localStorageSlice.actions;
