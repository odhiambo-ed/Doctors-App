/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const appointmentsAPI = 'http://localhost:3000/appointments';
const initialState = [];

export const fetchAppointment = createAsyncThunk('physicians/getAppointment', async () => {
  const res = await fetch(appointmentsAPI);
  const data = await res.json();

  return data;
});

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  extraReducers: {
    [fetchAppointment.fulfilled]: (state, action) => action.payload,

  },
});

export default appointmentsSlice.reducer;