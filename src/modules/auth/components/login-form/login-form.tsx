import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../../../ui';
import {
  EMAIL_PATTERN,
  PASSWORD_MIN_LENGTH,
  REQUIRED_FIELD_MESSAGE
} from '../../../../utils';
import { ILoginForm } from '../../types';

const LoginForm: FC = () => {
  const defaultValues: ILoginForm = {
    email: '',
    password: ''
  };

  const emailRules = {
    required: REQUIRED_FIELD_MESSAGE,
    pattern: { value: EMAIL_PATTERN, message: 'Enter valid email' }
  };

  const passwordRules = {
    required: REQUIRED_FIELD_MESSAGE,
    minLength: {
      value: PASSWORD_MIN_LENGTH,
      message: `Password must contain at least ${PASSWORD_MIN_LENGTH} characters`
    }
  };

  const { control, handleSubmit } = useForm<ILoginForm>({ defaultValues });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data);

  return (
    <form
      className="flex w-[250px] flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="email"
        control={control}
        rules={emailRules}
        render={({ field, formState }) => (
          <Input
            type="text"
            placeholder="Email"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={passwordRules}
        render={({ field, formState }) => (
          <Input
            type="password"
            placeholder="Password"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            textError={formState?.errors[field.name]?.message}
          />
        )}
      />

      <input className="btn btn-green" type="submit" value="Log In" />
    </form>
  );
};

export { LoginForm };
