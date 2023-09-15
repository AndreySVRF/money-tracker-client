import { FC, useEffect, useState } from 'react';
import { PlusCircleIcon } from '../../assets';
import {
  DataControlTable,
  DataEmptyInfo,
  IDataTableItem,
  Modal
} from '../../components';
import { ITransactionForm } from './types';
import { Button, IOption } from '../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TransactionForm } from './components';
import { CategoriesActions } from '../categories';
import { TransactionsActions } from './actions';

const Transactions: FC = () => {
  const [isOpenAddTransactionModal, setOpenAddTransactionModal] =
    useState(false);

  const dispatch = useDispatch();
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const categoriesActions = CategoriesActions(dispatch);
  const transactionsActions = TransactionsActions(dispatch);

  const categoryOptions: IOption[] = categories.map(({ id, title }) => ({
    value: String(id),
    label: title
  }));

  const transactionsTableHeader = ['Title', 'Date', 'Amount, ₽', ''];
  const transactionsTableData: IDataTableItem[] = transactions?.map(
    ({ id, title, date, amount }) => ({
      id,
      title,
      other: [
        [<div className="text-center">{date}</div>],
        [<div className="text-center">{amount}</div>]
      ]
    })
  );

  const toggleAddTransactionModal = () => {
    setOpenAddTransactionModal((state) => !state);
  };

  const handleAddTransaction = async (userData: ITransactionForm) => {
    await transactionsActions
      .addTransaction(userData)
      .then(toggleAddTransactionModal);
  };

  const handleRemoveTransaction = async (id: number) => {
    await transactionsActions.removeTransaction(id);
  };

  useEffect(() => {
    categoriesActions.loadCategories().catch(console.error);
    transactionsActions.loadTransactions().catch(console.error);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mx-10 mt-10 flex flex-col gap-6 rounded-md bg-gray-200 p-4 dark:bg-slate-800">
      <div className="flex items-center justify-between">
        <div className="text-md font-bold">Your transactions list</div>
        <Button onClick={toggleAddTransactionModal}>
          <PlusCircleIcon className="h-6 w-6" />
          Add transaction
        </Button>
      </div>

      {transactionsTableData.length ? (
        <DataControlTable
          header={transactionsTableHeader}
          data={transactionsTableData}
          handleRemove={handleRemoveTransaction}
        />
      ) : (
        <DataEmptyInfo
          title="Transactions are empty"
          text="Add your first transaction"
        />
      )}

      {isOpenAddTransactionModal && (
        <Modal title="Add transaction" handleClose={toggleAddTransactionModal}>
          <TransactionForm
            categoryOptions={categoryOptions}
            onSubmit={handleAddTransaction}
          />
        </Modal>
      )}
    </div>
  );
};

export { Transactions };
