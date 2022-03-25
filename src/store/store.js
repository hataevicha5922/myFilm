import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './movie';
import { userReducer } from './user';
import { seriesReducer } from './series';

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
  series: seriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
