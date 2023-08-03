import { FC } from 'react';
import { WarningIcon } from '../../assets';

interface IErrorMessageProps {
  textError: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ textError }) => {
  return (
    <div className="ml-1 flex items-start gap-1 text-red-700">
      <span>
        <WarningIcon className="h-5 w-5" />
      </span>
      {textError}
    </div>
  );
};

export { ErrorMessage };
