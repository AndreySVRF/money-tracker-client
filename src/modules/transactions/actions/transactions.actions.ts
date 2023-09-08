import { Dispatch } from '@reduxjs/toolkit';
import { TransactionsService } from '../services';
import { add, remove, setAll } from '../slices';
import { errorHandler } from '../../../utils';
import { ITransactionForm } from '../types';
import { TransactionDataAddAdapter } from '../helpers';

const TransactionsActions = (dispatch: Dispatch) => {
  const loadTransactions = async () => {
    try {
      const data = await TransactionsService.getAll();

      if (data) {
        dispatch(setAll(data));
      }
    } catch (e) {
      errorHandler(e);
    }
  };

  const addTransaction = async (userData: ITransactionForm) => {
    const transactionData = TransactionDataAddAdapter(userData);

    try {
      const data = await TransactionsService.add(transactionData);

      if (data) {
        dispatch(add(data));
      }

      loadTransactions().catch(console.error);
    } catch (e) {
      errorHandler(e);
    }
  };

  const removeTransaction = async (id: number) => {
    try {
      const data = await TransactionsService.remove(id);

      if (data) {
        dispatch(remove(id));
      }

      loadTransactions().catch(console.error);
    } catch (e) {
      errorHandler(e);
    }
  };

  return { loadTransactions, addTransaction, removeTransaction };
};

export { TransactionsActions };
