/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

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

  reducers: {
    getDoctorDetails: (state, action) => {
      const { name } = action.payload;
      const singlePhysician = current(state).physicianList.map((physician) => {
        if (name === physician.name) {
          return { ...physician, show: true };
        }
        if (name !== physician.name) {
          return { ...physician, show: false };
        }
        return physician;
      });
      state.physicianList = singlePhysician;
    },

  },

  extraReducers: {

    [fetchPhysicians.fulfilled]: (state, action) => {
      const PhysiciansArr = action.payload.map((item) => ({
        id: item.id,
        name: item.name,
        bio: item.bio,
        specialization: item.specialization,
        photo: item.photo,
        city: item.city,
        consultation_fee: item.consultation_fee,
        show: false,
      }));
      state.physicianList = PhysiciansArr;
      state.loading = false;
    },

    [fetchPhysicians.pending]: (state) => { state.loading = true; },
    [fetchPhysicians.rejected]: (state) => { state.loading = false; },
  },

});
export const { getDoctorDetails } = physiciansSlice.actions;

export default physiciansSlice.reducer;
