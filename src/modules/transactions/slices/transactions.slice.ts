import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITransaction } from '../types';

interface ITransactionsState {
  transactions: ITransaction[];
}

const initialState: ITransactionsState = {
  transactions: []
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<ITransaction[]>) => {
      state.transactions = action.payload;
    },
    add: (state, action: PayloadAction<ITransaction>) => {
      state.transactions.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const transactionIdToRemove = action.payload;

      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== transactionIdToRemove
      );
    },
    resetTransactionsState: () => initialState
  }
});

export const { setAll, add, remove, resetTransactionsState } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
