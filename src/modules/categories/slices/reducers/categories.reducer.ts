import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../types';
import { initialState } from '../categories.slice.ts';

const setAll = createAction<ICategory[]>('setAll');

const categoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAll, (state, action: PayloadAction<ICategory[]>) => {
    state.categories = action.payload;
  });
});

/*add: (state, action: PayloadAction<ICategory>) => {
  state.categories.push(action.payload);
},
  update: (state, action: PayloadAction<ICategory>) => {
  const subscriberToUpdate = state.categories.find(
    (category) => category.id === action.payload.id
  );

  if (subscriberToUpdate) {
    Object.assign(subscriberToUpdate, action.payload.title);
  }
},
  remove: (state, action: PayloadAction<number>) => {
  const categoryIdToRemove = action.payload;

  state.categories = state.categories.filter(
    (category) => category.id !== categoryIdToRemove
  );
},
  resetCategoriesState: () => initialState*/

export { categoriesReducer };
