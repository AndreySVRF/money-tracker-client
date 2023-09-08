import { ITransactionType } from '../types';

interface ITransactionPostRequestDto {
  title: string;
  amount: number;
  type: ITransactionType;
  category: {
    id: number;
  };
}

export type { ITransactionPostRequestDto };
