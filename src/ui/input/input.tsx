import { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import { WarningIcon } from '../../assets';
import * as classNames from 'classnames';

interface IInputProps extends FieldValues {
  textError?: string | null;
}

const Input: FC<IInputProps> = ({ textError, ...props }) => {
  return (
    <div className=" flex flex-col gap-1">
      <input
        className={classNames('input', [{ 'input-error': textError }])}
        {...props}
      />

      {!!textError && (
        <span className="ml-1 flex items-center gap-1 text-red-700">
          <WarningIcon className="h-5 w-5" />
          {textError}
        </span>
      )}
    </div>
  );
};

export { Input };
