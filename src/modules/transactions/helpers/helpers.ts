import { ITransaction, ITransactionForm } from '../types';
import {
  ITransactionPostRequestDto,
  ITransactionsGetResponseDto
} from '../dto';
import { getDateAndTime } from '../../../utils';

const TransactionDataAddAdapter = (
  userData: ITransactionForm
): ITransactionPostRequestDto => {
  const { title, category, amount, type } = userData;

  return {
    title,
    amount: parseInt(amount),
    type,
    category: {
      id: parseInt(category.value)
    }
  };
};

const TransactionDataAdapter = (
  data: ITransactionsGetResponseDto
): ITransaction => {
  const { id, title, type, createdAt, amount, category } = data;

  return {
    id,
    title,
    type,
    date: getDateAndTime(createdAt),
    amount,
    category: category.title
  };
};

export { TransactionDataAddAdapter, TransactionDataAdapter };
