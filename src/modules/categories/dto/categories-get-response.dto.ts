import { ITransactionsGetResponseDto } from '../../transactions';

interface ICategoriesGetResponseDto {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  transactions: ITransactionsGetResponseDto[];
}

export type { ICategoriesGetResponseDto };
