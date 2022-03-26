import { createSelector } from '@reduxjs/toolkit';

const getMoviesData = (state) => state.moviesData;

export const getMoviesTitle = createSelector(
  getMoviesData,
  (movies) => movies.moviesTitle
);
