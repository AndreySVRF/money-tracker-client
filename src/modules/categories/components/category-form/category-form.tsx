import { FC } from 'react';
import { REQUIRED_FIELD_MESSAGE } from '../../../../utils';
import { Controller, useForm } from 'react-hook-form';
import { ICategoryForm } from '../../types';
import { Input } from '../../../../ui';

interface ICategoryFormProps {
  initialValues?: ICategoryForm;
  onSubmit: (data: ICategoryForm) => void;
}

const CategoryForm: FC<ICategoryFormProps> = ({ initialValues, onSubmit }) => {
  const defaultValues: ICategoryForm = {
    title: ''
  };

  const titleRules = {
    required: REQUIRED_FIELD_MESSAGE
  };

  const { control, handleSubmit } = useForm<ICategoryForm>({
    defaultValues: initialValues || defaultValues
  });

  console.log('initialValues', initialValues);

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

      <input className="btn btn-green" type="submit" value="Confirm" />
    </form>
  );
};

export { CategoryForm };
