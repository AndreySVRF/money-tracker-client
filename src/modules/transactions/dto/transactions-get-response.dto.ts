import { ITransactionType } from '../types';
import { ICategory } from '../../categories';

interface ITransactionsGetResponseDto {
  id: number;
  title: string;
  amount: number;
  type: ITransactionType;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
}

export type { ITransactionsGetResponseDto };
