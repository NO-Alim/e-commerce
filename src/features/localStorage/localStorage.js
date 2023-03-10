import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reloader: true,
};

const localStorageSlice = createSlice({
  name: 'localStorage',
  initialState,
  reducers: {
    reload: (state, action) => {
      state.reloader = !state.reloader;
    },
  },
});

export default localStorageSlice.reducer;
export const { reload } = localStorageSlice.actions;
