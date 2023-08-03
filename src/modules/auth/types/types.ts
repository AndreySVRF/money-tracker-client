interface ILoginForm {
  email: string;
  password: string;
}

interface IRegisterForm extends ILoginForm {}

export type { ILoginForm, IRegisterForm };
