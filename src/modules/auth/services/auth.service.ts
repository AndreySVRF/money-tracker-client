import { ILoginForm, IRegisterForm, IUser, IUserResponse } from '../types';
import { instance } from '../../../api';

const AuthService = {
  async registrations(
    userData: IRegisterForm
  ): Promise<IUserResponse | undefined> {
    const { data } = await instance.post<IUserResponse>('user', userData);

    return data;
  },

  async login(userData: ILoginForm): Promise<IUser | undefined> {
    const { data } = await instance.post<IUser>('auth/login', userData);

    return data;
  },

  async getProfile(): Promise<IUser | undefined> {
    const { data } = await instance.get<IUser>('auth/profile');

    return data;
  }
};

export { AuthService };
