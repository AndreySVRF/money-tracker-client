import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../modules/auth';
import categoriesReducer from '../modules/categories';
import transactionsReducer from '../modules/transactions';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  transactions: transactionsReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
