import { configureStore } from '@reduxjs/toolkit';
import physicians from './physicians/physicianSlice';
import users from './users/userSlice';
import appointments from './appointments/appointmentSlice';

const store = configureStore({
  reducer: {
    physicians,
    users,
    appointments,
  },
});

export default store;
