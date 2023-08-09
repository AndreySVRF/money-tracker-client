import { ILoginForm, IRegisterForm } from '../types';
import { instance } from '../../../api';
import { IUserRegisterResponseDto, IUserResponse } from '../dto';

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

    return data;
  },

  async getProfile(): Promise<IUserResponse | undefined> {
    const { data } = await instance.get<IUserResponse>('auth/profile');

    return data;
  }
};

export { AuthService };
