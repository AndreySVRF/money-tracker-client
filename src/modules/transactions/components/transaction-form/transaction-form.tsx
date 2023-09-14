import { FC } from 'react';
import { REQUIRED_FIELD_MESSAGE } from '../../../../utils';
import { Controller, useForm } from 'react-hook-form';
import { ITransactionForm, ITransactionType } from '../../types';
import { Input, IOption, Select } from '../../../../ui';
import { RadioGroup } from '../../../../components/radio-group';
import { IRadioItem } from '../../../../components/radio-group/types/types.ts';

interface ITransactionFormProps {
  categoryOptions: IOption[];
  onSubmit: (data: ITransactionForm) => void;
}

const TransactionForm: FC<ITransactionFormProps> = ({
  categoryOptions,
  onSubmit
}) => {
  const requiredRule = {
    required: REQUIRED_FIELD_MESSAGE
  };

  const transactionTypes: IRadioItem<ITransactionType>[] = [
    { value: 'expense', text: 'Expense' },
    { value: 'income', text: 'Income' }
  ];

  const { control, handleSubmit } = useForm<ITransactionForm>();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={requiredRule}
        render={({ field, formState }) => (
          <Input
            type="text"
            placeholder="Title"
            name={field.name}
            onChange={field.onChange}
            autoFocus={true}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        rules={requiredRule}
        render={({ field, formState }) => (
          <Select
            name={field.name}
            onChange={field.onChange}
            options={categoryOptions}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />

      <Controller
        name="type"
        control={control}
        rules={requiredRule}
        render={({ field, formState }) => (
          <RadioGroup
            name={field.name}
            label={'Type'}
            onChange={field.onChange}
            items={transactionTypes}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />

      <Controller
        name="amount"
        control={control}
        rules={requiredRule}
        render={({ field, formState }) => (
          <Input
            type="number"
            placeholder="Amount"
            name={field.name}
            onChange={field.onChange}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />
      <input className="btn btn-green" type="submit" value="Confirm" />
    </form>
  );
};

export { TransactionForm };
