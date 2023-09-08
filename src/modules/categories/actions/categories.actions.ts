import { CategoriesService } from '../services';
import { add, remove, setAll, update } from '../slices';
import { errorHandler } from '../../../utils';
import { Dispatch } from '@reduxjs/toolkit';
import { ICategoryForm } from '../types';

const CategoriesActions = (dispatch: Dispatch) => {
  const loadCategories = async () => {
    try {
      const data = await CategoriesService.getAll();

      if (data) {
        dispatch(setAll(data));
      }
    } catch (e) {
      errorHandler(e);
    }
  };

  const addCategory = async (userData: ICategoryForm) => {
    try {
      const data = await CategoriesService.add(userData);

      if (data) {
        dispatch(add(data));
      }

      loadCategories().catch(console.error);
    } catch (e) {
      errorHandler(e);
    }
  };

  const updateCategory = async (id: number, userData: ICategoryForm) => {
    try {
      const data = await CategoriesService.update(id, userData);

      if (data) {
        dispatch(update(data));
      }

      loadCategories().catch(console.error);
    } catch (e) {
      errorHandler(e);
    }
  };

  const removeCategory = async (id: number) => {
    try {
      const data = await CategoriesService.remove(id);

      if (data) {
        dispatch(remove(id));
      }

      loadCategories().catch(console.error);
    } catch (e) {
      errorHandler(e);
    }
  };

  return {
    loadCategories,
    addCategory,
    updateCategory,
    removeCategory
  };
};

export { CategoriesActions };
