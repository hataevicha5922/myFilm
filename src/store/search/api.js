import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import APIKey from '../../common/apis/MovieApiKey';

export const moviesApi = createApi({
  reducerPath: 'moviesList',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://www.omdbapi.com/',
  }),
  endpoints: (builder) => ({
    getMoviesList: builder.query({
      query: (title) => ({
        url: '/',
        params: {
          s: title,
          apikey: APIKey,
          plot: 'full',
        },
      }),
      transformResponse: (response) => response.Search,
    }),
    getMovie: builder.query({
      query: (id) => ({
        url: '/',
        params: {
          i: id,
          apikey: APIKey,
          plot: 'full',
        },
      }),
    }),
  }),
});

export const { useGetMoviesListQuery, useGetMovieQuery } = moviesApi;
