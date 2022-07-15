import { authApi } from 'src/lib/fetch';
import {
  IGenricResponse,
  IGetUserProfileResponse,
  ILoginData,
  ISingupData
} from './../types/index';

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get<IGenricResponse>('auth/refresh-token');
  return response.data;
};

export const signUpUserFn = async (user: ISingupData) => {
  const response = await authApi.post<IGenricResponse>('/auth/signup', user);
  return response.data;
};

export const loginUserFn = async (user: ILoginData) => {
  const response = await authApi.post<IGenricResponse>('auth/login', user);
  return response.data;
};

export const getMeFn = async () => {
  const response = await authApi.get<IGetUserProfileResponse>('/cpm/me');
  return response.data;
};
