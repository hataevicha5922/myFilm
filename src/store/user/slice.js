import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setAuthenticated } = userSlice.actions;
