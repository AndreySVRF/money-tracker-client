import { FC, ReactNode } from 'react';
import { EmptyListIcon } from '../../assets';

interface IDataEmptyInfoProps {
  title: string;
  text?: string;
  action?: ReactNode;
}

const DataEmptyInfo: FC<IDataEmptyInfoProps> = ({ title, text, action }) => {
  return (
    <div className="flex flex-col items-center">
      <EmptyListIcon className="h-16 w-16 fill-slate-600 dark:fill-slate-300" />
      <div className="my-3 text-2xl text-gray-800 dark:text-gray-200">
        {title}
      </div>
      {text && (
        <div className="text-md my-3 text-gray-700 dark:text-gray-300">
          {text}
        </div>
      )}
      {action && <div className="my-5">{action}</div>}
    </div>
  );
};

export { DataEmptyInfo };
