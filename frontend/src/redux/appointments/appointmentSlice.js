/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../lib/http'; // <== This is the new code

const INITIAL_STATE = { appointmentList: [], loading: true };
const fetchAppointmentsList = () => http.get('/appointments'); // <--- This is the new line

export const fetchAppointments = createAsyncThunk( // <--- This is the new code
  'appointments/getAppointments',
  async () => {
    const { data } = await fetchAppointmentsList();
    return data;
  },
);

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchAppointments.fulfilled]: (state, action) => {
      state.appointmentList = action.payload;
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
