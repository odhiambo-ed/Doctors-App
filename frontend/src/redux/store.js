import { configureStore } from '@reduxjs/toolkit';
import physicians from './physicians/physicianSlice';
import users from './users/userSlice';
import appointments from './appointments/appointmentSlice';
import authReducer from '../slices/auth';
import messageReducer from '../slices/message';

const store = configureStore({
  reducer: {
    physicians,
    users,
    appointments,
    auth: authReducer,
    message: messageReducer,
    devTools: true,
  },
});

export default store;
