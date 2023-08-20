import { ILoginForm, IRegisterForm } from '../types';
import { instance } from '../../../api';
import { IUserRegisterResponseDto, IUserResponse } from '../dto';
import {
  removeFromLocalStorage,
  setToLocalStorage,
  TOKEN_KEY
} from '../../../utils';

const AuthService = {
  async registrations(
    userData: IRegisterForm
  ): Promise<IUserRegisterResponseDto | undefined> {
    const { data } = await instance.post<IUserRegisterResponseDto>(
      'user',
      userData
    );

    return data;
  },

  async login(userData: ILoginForm): Promise<IUserResponse | undefined> {
    const { data } = await instance.post<IUserResponse>('auth/login', userData);

    if (data) {
      setToLocalStorage(TOKEN_KEY, data.token);

      instance.defaults.headers.Authorization = `Bearer ${data.token}`;
    }

    return data;
  },

  async getProfile(): Promise<IUserResponse | undefined> {
    const { data } = await instance.get<IUserResponse>('auth/profile');

    return data;
  },

  logout(): void {
    removeFromLocalStorage(TOKEN_KEY);

    instance.defaults.headers.Authorization = '';
  }
};

export { AuthService };
