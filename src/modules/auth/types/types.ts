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

interface IUserResponse {
  token: string;
  user: {
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type { ILoginForm, IRegisterForm, IUser, IUserResponse };
