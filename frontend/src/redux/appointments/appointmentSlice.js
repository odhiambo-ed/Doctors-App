/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const appointmentsAPI = 'http://localhost:3000/appointments';
const INITIAL_STATE = { appointmentList: [], loading: true };
export const fetchAppointments = createAsyncThunk(
  'appointments/getAppointments',
  async () => {
    const res = await fetch(appointmentsAPI);
    const data = await res.json();
    return data;
  },
);
const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchAppointments.fulfilled]: (state, action) => {
      const AppointmentsArr = action.payload.map((item) => ({
        id: item.id,
        reason: item.reason,
        date: item.date,
        time: item.time,
      }));
      state.appointmentList = AppointmentsArr;
      state.loading = false;
    },
    [fetchAppointments.pending]: (state) => {
      state.loading = true;
    },
    [fetchAppointments.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default appointmentsSlice.reducer;
