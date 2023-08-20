import { resetCategoriesState, resetUserState } from '../../modules';
import { Dispatch } from '@reduxjs/toolkit';

const resetStore = (dispatch: Dispatch): void => {
  dispatch(resetUserState());
  dispatch(resetCategoriesState());
};

export { resetStore };
