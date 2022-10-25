import { configureStore } from '@reduxjs/toolkit';
import physicians from './physicians/physicianSlice';

const store = configureStore({
  reducer: {
    physicians,
    users,
    appointments,
  },
});

export default store;