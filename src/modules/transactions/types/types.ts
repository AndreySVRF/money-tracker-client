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
  type: ITransactionType;
  date: string;
  amount: number;
  category: string;
}

export type { ITransactionType, ITransactionForm, ITransaction };
