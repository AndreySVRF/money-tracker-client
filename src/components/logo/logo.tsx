import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MoneyIcon } from '../../assets';

const Logo: FC = () => {
  return (
    <Link to="/" className="flex gap-2">
      <MoneyIcon className="h-7 w-7 fill-green-700 dark:fill-green-500" />
      <span className="text-lg font-bold text-slate-700 dark:text-slate-200">
        Money Tracker
      </span>
    </Link>
  );
};

export { Logo };
