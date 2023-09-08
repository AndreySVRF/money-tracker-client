import { IOption } from '../../../ui';

type ITransactionType = 'expense' | 'income';

interface ITransactionForm {
  title: string;
  category: IOption;
  amount: string;
  type: ITransactionType;
}

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  category: {
    id: number;
  };
}

export type { ITransactionType, ITransactionForm, ITransaction };
