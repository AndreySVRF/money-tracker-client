import { ITransactionType } from '../types';

interface ITransactionsGetResponseDto {
  id: number;
  title: string;
  amount: number;
  type: ITransactionType;
  createdAt: string;
  updatedAt: string;
  category: {
    id: number;
  };
}

export type { ITransactionsGetResponseDto };
