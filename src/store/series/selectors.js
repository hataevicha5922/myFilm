import { createSelector } from '@reduxjs/toolkit';

const getSeries = (state) => state.series;

export const getSeriesList = createSelector(
  getSeries,
  (series) => series.seriesList
);
