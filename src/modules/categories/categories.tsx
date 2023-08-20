import { FC, useEffect, useState } from 'react';
import { PlusCircleIcon } from '../../assets';
import { DataEmptyInfo, IDataTableItem, Modal } from '../../components';
import { CategoryForm, DataControlTable } from './components';
import { ICategoryForm } from './types';
import { Button } from '../../ui';
import { errorHandler } from '../../utils';
import { CategoriesService } from './services';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, setAll, update } from './slices';
import { RootState } from '../../store';
import { categoryFormDataAdapter } from './helpers';

const Categories: FC = () => {
  const [isOpenAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [isOpenEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [selectedCategoryId, setCategoryId] = useState<number | null>(null);

  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const selectedCategory = categories?.find(
    ({ id }) => id === selectedCategoryId
  );

  const categoriesTableData: IDataTableItem[] = categories?.map(
    ({ id, title }) => ({
      id,
      title
    })
  );

  const toggleAddCategoryModal = () => {
    setOpenAddCategoryModal((state) => !state);
  };

  const toggleEditCategoryModal = () => {
    setOpenEditCategoryModal((state) => !state);
  };

  const handleEditCategory = (id: number) => {
    setCategoryId(id);

    toggleEditCategoryModal();
  };

  const loadCategories = async () => {
    try {
      const data = await CategoriesService.getAll();

      console.log('data', data);

      if (data) {
        dispatch(setAll(data));
      }
    } catch (e) {
      errorHandler(e);
    }
  };

  const handleAddCategory = async (userData: ICategoryForm) => {
    try {
      const data = await CategoriesService.add(userData);

      if (data) {
        dispatch(add(data));
      }

      loadCategories().catch(console.error);

      toggleAddCategoryModal();
    } catch (e) {
      errorHandler(e);
    }
  };

  const handleUpdateCategory = async (id: number, userData: ICategoryForm) => {
    try {
      const data = await CategoriesService.update(id, userData);

      if (data) {
        dispatch(update(data));
      }

      loadCategories().catch(console.error);

      toggleEditCategoryModal();
    } catch (e) {
      errorHandler(e);
    }
  };

  const handleRemoveCategory = async (id: number) => {
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

  useEffect(() => {
    console.log('load');
    loadCategories().catch(console.error);
  }, []);

  return (
    <div className="mx-10 mt-10 flex flex-col gap-6 rounded-md bg-gray-200 p-4 dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <div className="text-md font-bold">Your category list</div>
        <Button onClick={toggleAddCategoryModal}>
          <PlusCircleIcon className="h-6 w-6" />
          Add category
        </Button>
      </div>

      {categoriesTableData.length ? (
        <DataControlTable
          data={categoriesTableData}
          handleEdit={handleEditCategory}
          handleRemove={handleRemoveCategory}
        />
      ) : (
        <DataEmptyInfo
          title="Categories are empty"
          text="Add your first category"
        />
      )}

      {isOpenAddCategoryModal && (
        <Modal title="Add category" handleClose={toggleAddCategoryModal}>
          <CategoryForm onSubmit={handleAddCategory} />
        </Modal>
      )}

      {isOpenEditCategoryModal && selectedCategoryId && (
        <Modal title="Edit category" handleClose={toggleEditCategoryModal}>
          <CategoryForm
            initialValues={
              selectedCategory && categoryFormDataAdapter(selectedCategory)
            }
            onSubmit={(userData) =>
              handleUpdateCategory(selectedCategoryId, userData)
            }
          />
        </Modal>
      )}
    </div>
  );
};

export { Categories };
