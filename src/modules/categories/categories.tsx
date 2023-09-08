import { FC, useEffect, useState } from 'react';
import { PlusCircleIcon } from '../../assets';
import {
  DataControlTable,
  DataEmptyInfo,
  IDataTableItem,
  Modal
} from '../../components';
import { CategoryForm } from './components';
import { ICategoryForm } from './types';
import { Button } from '../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CategoryFormDataAdapter } from './helpers';
import { CategoriesActions } from './actions';

const Categories: FC = () => {
  const [isOpenAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [isOpenEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [selectedCategoryId, setCategoryId] = useState<number | null>(null);

  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const categoriesActions = CategoriesActions(dispatch);

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

  const handleAddCategory = async (userData: ICategoryForm) => {
    await categoriesActions.addCategory(userData).then(toggleAddCategoryModal);
  };

  const handleUpdateCategory = async (id: number, userData: ICategoryForm) => {
    await categoriesActions
      .updateCategory(id, userData)
      .then(toggleEditCategoryModal);
  };

  const handleRemoveCategory = async (id: number) => {
    await categoriesActions.removeCategory(id);
  };

  useEffect(() => {
    categoriesActions.loadCategories().catch(console.error);
    // eslint-disable-next-line
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
              selectedCategory && CategoryFormDataAdapter(selectedCategory)
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
