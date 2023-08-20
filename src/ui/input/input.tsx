import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { ErrorMessage } from '../error-message';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  textError?: string | null;
}

const Input: FC<IInputProps> = ({ textError, ...props }) => {
  return (
    <div className=" flex flex-col gap-1">
      <input
        className={classNames('input', [{ 'input-error': textError }])}
        {...props}
      />

      {!!textError && <ErrorMessage textError={textError} />}
    </div>
  );
};

export { Input };
