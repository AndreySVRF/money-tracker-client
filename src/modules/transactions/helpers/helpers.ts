import { ITransactionForm } from '../types';
import { ITransactionPostRequestDto } from '../dto';

const TransactionDataAddAdapter = (
  userData: ITransactionForm
): ITransactionPostRequestDto => {
  const { title, category, amount } = userData;

  return {
    title,
    amount: parseInt(amount),
    type: 'expense',
    category: {
      id: parseInt(category.value)
    }
  };
};

export { TransactionDataAddAdapter };
