interface ILoginForm {
  email: string;
  password: string;
}

interface IRegisterForm extends ILoginForm {}

interface IUser {
  id: string;
  email: string;
  token: string;
}

export type { ILoginForm, IRegisterForm, IUser };
