import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { CircleIcon } from '../../assets';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
}

const Radio: FC<IRadioProps> = ({ label, isError, ...props }) => {
  const id = `radio${props.value}`;

  return (
    <div className="flex cursor-pointer items-center space-x-2">
      <div className="relative flex cursor-pointer items-center rounded-full">
        <input
          id={id}
          type="radio"
          className={classNames('input-radio peer', {
            ['input-radio-green']: !isError,
            ['input-radio-red']: isError
          })}
          {...props}
        />
        <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-green-500 opacity-0 transition-opacity peer-checked:opacity-100">
          <CircleIcon className="h-3 w-3" />
        </div>
      </div>

      <label className="cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export { Radio };
