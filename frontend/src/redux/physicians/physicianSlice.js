/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const physiciansAPI = 'http://localhost:3000/physicians';
const INITIAL_STATE = { physicianList: [], loading: true };

export const fetchPhysicians = createAsyncThunk('physicians/getPhysicians', async () => {
  const res = await fetch(physiciansAPI);
  const data = await res.json();
  return data;
});

const physiciansSlice = createSlice({
  name: 'physicians',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchPhysicians.fulfilled]: (state, action) => {
      const res = action.payload.map(({
        id, name, bio, specialization, photo, city, consultation_fee,
      }) => ({
        id, name, bio, specialization, photo, city, consultation_fee,
      }));
      state.loading = false;
      state.physicianList = res;
    },
    [fetchPhysicians.pending]: (state) => { state.loading = true; },
    [fetchPhysicians.rejected]: (state) => { state.loading = false; },
  },

});

export default physiciansSlice.reducer;
