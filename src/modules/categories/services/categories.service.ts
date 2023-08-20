import { instance } from '../../../api';
import { ICategoriesGetResponseDto } from '../dto';
import { ICategoryForm } from '../types';

const CategoriesService = {
  async getAll(): Promise<ICategoriesGetResponseDto[] | undefined> {
    const { data } = await instance.get<ICategoriesGetResponseDto[]>(
      'category'
    );

    return data;
  },

  async add(
    userData: ICategoryForm
  ): Promise<ICategoriesGetResponseDto | undefined> {
    const { data } = await instance.post<ICategoriesGetResponseDto>(
      'category',
      userData
    );

    return data;
  },

  async update(
    id: number,
    userData: ICategoryForm
  ): Promise<ICategoriesGetResponseDto | undefined> {
    const { data } = await instance.patch<ICategoriesGetResponseDto>(
      `category/${id}`,
      userData
    );

    return data;
  },

  async remove(id: number): Promise<boolean> {
    const { data } = await instance.delete<boolean>(`category/${id}`);

    return data;
  }
};

export { CategoriesService };
