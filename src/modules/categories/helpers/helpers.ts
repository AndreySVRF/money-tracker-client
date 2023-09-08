import { ICategory, ICategoryForm } from '../types';

const CategoryFormDataAdapter = (userData: ICategory): ICategoryForm => {
  const { title } = userData;

  return {
    title
  };
};

export { CategoryFormDataAdapter };
