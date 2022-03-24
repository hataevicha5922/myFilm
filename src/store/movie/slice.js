import { createSlice } from '@reduxjs/toolkit';
import { fetchAsyncMovies } from './actions';

const initialState = {
  moviesList: [],
  status: null,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.moviesList = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.moviesList = payload;
    },
    [fetchAsyncMovies.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
