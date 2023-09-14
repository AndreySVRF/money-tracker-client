import { default as BaseSelect, Props } from 'react-select';
import { FC } from 'react';
import { ErrorMessage } from '../error-message';
import classNames from 'classnames';

interface ISelectProps extends Props {
  textError?: string | null;
}

const selectStyles = {
  control: {
    base: 'border border-slate-400 rounded-md bg-slate-100 dark:bg-slate-800 hover:cursor-pointer',
    focus: 'border-primary-600 ring-1 ring-primary-500',
    nonFocus: 'border-gray-300 hover:border-gray-600',
    error: 'border-red-700 hover:border-red-700'
  },
  placeholder: 'text-gray-500 dark:text-gray-400 pl-1 py-0.5',
  selectInput: 'pl-1 py-0.5',
  valueContainer: 'p-1 gap-1',
  singleValue: 'leading-7 ml-1',
  multiValue: 'bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5',
  multiValueLabel: 'leading-6 py-0.5',
  multiValueRemove:
    'border border-gray-200 bg-slate-100 dark:bg-slate-800 hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md',
  indicatorsContainer: 'p-1 gap-1',
  clearIndicator:
    'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800',
  indicatorSeparator: 'bg-gray-300',
  dropdownIndicator:
    'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black',
  menu: 'p-1 mt-2 border border-gray-200 bg-white dark:border-slate-500 dark:bg-slate-800 rounded-md',
  groupHeading: 'ml-3 mt-2 mb-1 text-gray-500 text-sm',
  option: {
    base: 'hover:cursor-pointer px-3 py-2 rounded',
    focus: 'bg-green-100 dark:bg-green-500 active:bg-gray-200',
    selected: 'after:ml-2 bg-green-300 dark:bg-green-700'
  },
  noOptionsMessage:
    'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm'
};

const Select: FC<ISelectProps> = ({ textError, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <BaseSelect
        unstyled
        styles={{
          input: (base) => ({
            ...base,
            'input:focus': {
              boxShadow: 'none'
            }
          }),
          multiValueLabel: (base) => ({
            ...base,
            whiteSpace: 'normal',
            overflow: 'visible'
          }),
          control: (base) => ({
            ...base,
            transition: 'none',
            boxShadow: 'none'
          })
        }}
        classNames={{
          ...props.classNames,
          control: ({ isFocused }) =>
            classNames(
              isFocused
                ? selectStyles.control.focus
                : selectStyles.control.nonFocus,
              selectStyles.control.base,
              !!textError && selectStyles.control.error
            ),
          placeholder: () => selectStyles.placeholder,
          input: () => selectStyles.selectInput,
          valueContainer: () => selectStyles.valueContainer,
          singleValue: () => selectStyles.singleValue,
          multiValue: () => selectStyles.multiValue,
          multiValueLabel: () => selectStyles.multiValueLabel,
          multiValueRemove: () => selectStyles.multiValueRemove,
          indicatorsContainer: () => selectStyles.indicatorsContainer,
          clearIndicator: () => selectStyles.clearIndicator,
          indicatorSeparator: () => selectStyles.indicatorSeparator,
          dropdownIndicator: () => selectStyles.dropdownIndicator,
          menu: () => selectStyles.menu,
          groupHeading: () => selectStyles.groupHeading,
          option: ({ isFocused, isSelected }) =>
            classNames(
              isFocused && selectStyles.option.focus,
              isSelected && selectStyles.option.selected,
              selectStyles.option.base
            ),
          noOptionsMessage: () => selectStyles.noOptionsMessage
        }}
        {...props}
      />

      {!!textError && <ErrorMessage textError={textError} />}
    </div>
  );
};

export { Select };
