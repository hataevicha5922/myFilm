import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './movie';
import { userReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer,
  movies: movieReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
