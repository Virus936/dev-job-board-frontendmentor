import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/filter/filterSlice';
import darkReducer from '../features/dark/darkSlice';

export default configureStore({
  reducer: {
    filter: filterReducer,
    dark: darkReducer,
  },
});
