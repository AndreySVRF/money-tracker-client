import { FC } from 'react';
import { REQUIRED_FIELD_MESSAGE } from '../../../../utils';
import { Controller, useForm } from 'react-hook-form';
import { ITransactionForm } from '../../types';
import { Input, IOption, Select } from '../../../../ui';

interface ITransactionFormProps {
  categoryOptions: IOption[];
  onSubmit: (data: ITransactionForm) => void;
}

const TransactionForm: FC<ITransactionFormProps> = ({
  categoryOptions,
  onSubmit
}) => {
  const titleRules = {
    required: REQUIRED_FIELD_MESSAGE
  };

  const categoryRules = {
    required: REQUIRED_FIELD_MESSAGE
  };

  const amountRules = {
    required: REQUIRED_FIELD_MESSAGE
  };

  const { control, handleSubmit } = useForm<ITransactionForm>();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={titleRules}
        render={({ field, formState }) => (
          <Input
            type="text"
            placeholder="Title"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            autoFocus={true}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        rules={categoryRules}
        render={({ field, formState }) => (
          <Select
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            options={categoryOptions}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />

      <Controller
        name="amount"
        control={control}
        rules={amountRules}
        render={({ field, formState }) => (
          <Input
            type="number"
            placeholder="Amount"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            autoFocus={true}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />
      <input className="btn btn-green" type="submit" value="Confirm" />
    </form>
  );
};

export { TransactionForm };
