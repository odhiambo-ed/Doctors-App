/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const usersAPI = 'http://localhost:3000/users';
const initialState = [];

export const fetchUser = createAsyncThunk('users/getUser', async () => {
  const res = await fetch(usersAPI);
  const data = await res.json();

  return data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => action.payload,

  },
});

export default usersSlice.reducer;