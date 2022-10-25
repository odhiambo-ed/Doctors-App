/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const appointmentsAPI = 'http://localhost:3000/appointments';
const INITIAL_STATE = { appointmentList: [], loading: true };

export const fetchAppointments = createAsyncThunk('physicians/getAppointments', async () => {
  const res = await fetch(appointmentsAPI);
  const data = await res.json();

  return data;
});


const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: INITIAL_STATE,

  extraReducers: {
    [fetchAppointments.fulfilled]: (state, action) => {
      const res = action.payload.map(({id, date, time, reason }) => {
        return { id, date, time, reason};
      });
      state.loading = false;
      state.userList = res;
    },
    [fetchAppointments.pending]: (state) => { state.loading = true },
    [fetchAppointments.rejected]: (state) => { state.loading = false },
  },

});

export default appointmentsSlice.reducer;