import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import movieApi from '../../common/apis/movieApi';
import APIKey from '../../common/apis/MovieApiKey';

export const fetchAsyncSeries = createAsyncThunk(
  'series/fetchAsyncSeries',
  async (_, { rejectWithValue }) => {
    try {
      const seriesText = 'Friends';
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${seriesText}&type=series`
      );
      if (response.statusText !== 'OK') {
        throw new Error('Server Error');
      }
      return response.data.Search;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
