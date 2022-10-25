/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const usersAPI = 'http://localhost:3000/users';
const INITIAL_STATE = { userList: [], loading: true };


export const fetchUsers = createAsyncThunk('users/getUsers', async () => {
  const res = await fetch(usersAPI);
  const data = await res.json();

  return data;
});

  

const physiciansSlice = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
  
    extraReducers: {
      [fetchUsers.fulfilled]: (state, action) => {
        const res = action.payload.map(({id, name, email }) => {
          return { id, name, email};
        });
        state.loading = false;
        state.userList = res;
      },
      [fetchUsers.pending]: (state) => { state.loading = true },
      [fetchUsers.rejected]: (state) => { state.loading = false },
    },
  
  });

export default usersSlice.reducer;











