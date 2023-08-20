import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../modules/auth';
import categoriesReducer from '../modules/categories';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
