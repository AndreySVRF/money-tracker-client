import { FC } from 'react';
import { ITransactionType } from '../../modules/transactions/types';
import { ArrowDownRightIcon, ArrowUpRightIcon } from '../../assets';

interface IAmountProps {
  amount: number;
  transactionType: ITransactionType;
}

const Amount: FC<IAmountProps> = ({ amount, transactionType }) => {
  const transactionTypeIcon = () => {
    switch (transactionType) {
      case 'income':
        return <ArrowUpRightIcon className="h-5 w-5 text-green-500" />;
      case 'expense':
        return <ArrowDownRightIcon className="h-5 w-5 text-red-500" />;
      default:
        return <></>;
    }
  };
  return (
    <div className="flex justify-center gap-2 text-center">
      {transactionTypeIcon()} {amount}
    </div>
  );
};

export { Amount };
