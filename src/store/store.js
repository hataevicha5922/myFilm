import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './movie';
import { userReducer } from './user';
import { seriesReducer } from './series';
import { moviesApi } from './search';

const rootReducer = combineReducers({
  user: userReducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  moviesData: movieReducer,
  series: seriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
