import { ICategory, ICategoryForm } from '../types';

const categoryFormDataAdapter = (data: ICategory): ICategoryForm => {
  const formData: ICategoryForm = {
    title: data.title
  };

  return formData;
};

export { categoryFormDataAdapter };
