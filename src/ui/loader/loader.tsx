import { SpinnerIcon } from '../../assets';
import { FC } from 'react';

interface ILoaderProps {
  text?: string;
}

const Loader: FC<ILoaderProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <SpinnerIcon className="h-10 w-10 animate-spin fill-green-600 text-gray-200 dark:text-gray-700" />
      {text && <div className="text-gray-700 dark:text-gray-200">{text}</div>}
    </div>
  );
};

export { Loader };
