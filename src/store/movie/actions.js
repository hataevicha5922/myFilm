import { createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import APIKey from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (_, { rejectWithValue }) => {
    try {
      const movieText = 'Harry';
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
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
