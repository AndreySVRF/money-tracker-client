import { default as BaseSelect, Props } from 'react-select';
import { FC } from 'react';
import { ErrorMessage } from '../error-message';

interface ISelectProps extends Props {
  textError?: string | null;
}

const Select: FC<ISelectProps> = ({ textError, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <BaseSelect {...props} />

      {!!textError && <ErrorMessage textError={textError} />}
    </div>
  );
};

export { Select };
