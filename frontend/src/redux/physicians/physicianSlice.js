/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const physiciansAPI = 'http://localhost:3000/physicians';
const initialState = [];

export const fetchPhysician = createAsyncThunk('physicians/getPhysician', async () => {
  const res = await fetch(physiciansAPI);
  const data = await res.json();

  return data;
});

const messagesSlice = createSlice({
  name: 'physicians',
  initialState,
  extraReducers: {
    [fetchPhysician.fulfilled]: (state, action) => action.payload,

  },
});

export default physiciansSlice.reducer;