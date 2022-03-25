import { createSelector } from '@reduxjs/toolkit';

const getMovies = (state) => state.movies;

export const getMoviesList = createSelector(
  getMovies,
  (movies) => movies.moviesList
);
