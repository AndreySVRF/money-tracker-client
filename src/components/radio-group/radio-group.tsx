import { ErrorMessage, Radio } from '../../ui';
import { IRadioItem, ViewType } from './types/types.ts';
import { FC } from 'react';
import { ITransactionType } from '../../modules/transactions/types';
import classNames from 'classnames';

interface IRadioGroupProps {
  items: IRadioItem<ITransactionType>[];
  name: string;
  label?: string;
  view?: ViewType;
  viewItems?: ViewType;
  textError?: string;
  onChange: () => void;
}

const RadioGroup: FC<IRadioGroupProps> = ({
  items,
  name,
  label,
  view = 'row',
  viewItems = 'row',
  textError,
  onChange
}) => {
  const radioGroup = items.map(({ text, value }) => (
    <Radio
      key={value}
      name={name}
      value={value}
      onChange={onChange}
      label={text}
      isError={!!textError}
    />
  ));

  return (
    <div className="flex flex-col gap-3">
      <div
        className={classNames('flex gap-3', {
          ['flex-row']: view === 'row',
          ['flex-col']: view === 'column'
        })}
      >
        <div className="text-gray-600 dark:text-gray-300">{label}:</div>

        <div
          className={classNames('flex gap-3', {
            ['flex-row']: viewItems === 'row',
            ['flex-col']: viewItems === 'column'
          })}
        >
          {radioGroup}
        </div>
      </div>

      {!!textError && <ErrorMessage textError={textError} />}
    </div>
  );
};

export { RadioGroup };
