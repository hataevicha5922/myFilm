import { StarRateTwoTone } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAsyncSeries } from './actions';

const initialState = {
  seriesList: [],
};

const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {
    addSeries: (state, { payload }) => {
      StarRateTwoTone.seriesList = payload;
    },
  },
  extraReducers: {
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      state.seriesList = payload;
    },
  },
});

export const { addSeries } = seriesSlice.actions;
export const seriesReducer = seriesSlice.reducer;
