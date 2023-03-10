import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import filterReducer from '../features/filter/filterSlice';
import localStorageReducer from '../features/localStorage/localStorage';
import paginationReducer from '../features/pagination/paginationSlice';
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pagination: paginationReducer,
    filter: filterReducer,
    localStorage: localStorageReducer,
  },
  //devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
