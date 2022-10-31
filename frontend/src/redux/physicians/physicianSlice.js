/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../lib/http'; // <== This is the new code

const fetchPhysiciansList = () => http.get('/physicians'); // <--- This is the new line
const INITIAL_STATE = { physicianList: [], loading: true };

export const fetchPhysicians = createAsyncThunk( // <--- This is the new code
  'physicians/getPhysicians',
  async () => {
    const { data } = await fetchPhysiciansList();
    data.forEach((item) => { item.show = false; });
    return data;
  },
);

const physiciansSlice = createSlice({
  name: 'physicians',
  initialState: INITIAL_STATE,
  reducers: {
    getDoctorDetails(state, action) {
      const newItems = state.physicianList.map((physician) => {
        if (physician.name === action.payload.name) {
          return { ...physician, show: !physician.show };
        }
        return physician;
      });
      return { ...state, physicianList: newItems };
    },
  },
  extraReducers: {
    [fetchPhysicians.fulfilled]: (state, action) => {
      state.physicianList = action.payload;
      state.loading = false;
    },
    [fetchPhysicians.pending]: (state) => { state.loading = true; },
    [fetchPhysicians.rejected]: (state) => { state.loading = false; },
  },

});

export const { getDoctorDetails } = physiciansSlice.actions;

export default physiciansSlice.reducer;
