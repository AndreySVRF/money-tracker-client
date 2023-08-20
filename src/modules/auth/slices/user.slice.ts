import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types';

interface IUserState {
  user: IUser | null;
  isAuth: boolean;
}

const initialState: IUserState = {
  user: null,
  isAuth: false
};

export const userSlice = createSlice({
  name: 'user ',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    resetUserState: () => initialState
  }
});

export const { login, resetUserState } = userSlice.actions;

export default userSlice.reducer;
