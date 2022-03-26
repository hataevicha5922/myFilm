import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesTitle: 'Harry',
};

const movieSlice = createSlice({
  name: 'moviesData',
  initialState,
  reducers: {
    setMoviesTitle: (state, action) => {
      state.moviesTitle = action.payload;
    },
  },
});

export const { setMoviesTitle } = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
