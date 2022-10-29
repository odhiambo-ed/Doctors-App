/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../../lib/http'; // <== This is the new code

const INITIAL_STATE = { userList: [], loading: true };
const fetchUsersList = () => http.get('/users'); // <--- This is the new line

export const fetchUsers = createAsyncThunk( // <--- This is the new code
  'users/getUsers',
  async () => {
    const { data } = await fetchUsersList();
    return data;
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,

  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.userList = action.payload;
      state.loading = false;
    },
    [fetchUsers.pending]: (state) => { state.loading = true; },
    [fetchUsers.rejected]: (state) => { state.loading = false; },
  },

});

export default usersSlice.reducer;
