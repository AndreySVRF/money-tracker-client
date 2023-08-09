interface IUserRegisterResponseDto {
  token: string;
  user: {
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type { IUserRegisterResponseDto };
