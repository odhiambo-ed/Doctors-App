import { configureStore } from '@reduxjs/toolkit';
import physicians from './physicians/physicianSlice';

const store = configureStore({
  reducer: {
    physicians,
  },
});

export default store;