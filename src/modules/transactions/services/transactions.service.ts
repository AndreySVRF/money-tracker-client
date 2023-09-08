import { instance } from '../../../api';
import {
  ITransactionPostRequestDto,
  ITransactionsGetResponseDto
} from '../dto';

const TransactionsService = {
  async getAll(): Promise<ITransactionsGetResponseDto[] | undefined> {
    const { data } = await instance.get<ITransactionsGetResponseDto[]>(
      'transaction'
    );

    return data;
  },

  async add(
    userData: ITransactionPostRequestDto
  ): Promise<ITransactionsGetResponseDto | undefined> {
    const { data } = await instance.post<ITransactionsGetResponseDto>(
      'transaction',
      userData
    );

    return data;
  },

  async remove(id: number): Promise<boolean> {
    const { data } = await instance.delete<boolean>(`transaction/${id}`);

    return data;
  }
};

export { TransactionsService };
