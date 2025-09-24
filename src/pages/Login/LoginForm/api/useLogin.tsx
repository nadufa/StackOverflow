import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../../app/api';
import type { IAuthResponse, IAuthUserData, ILoginRequest, ILoginResponse } from '../model';

export const auth = (): Promise<IAuthResponse> => {
  return ApiClient.GET<IAuthResponse>({
    url: `auth`,
  });
};

export const login = (data: { username: string; password: string }): Promise<ILoginResponse> => {
  return ApiClient.POST<ILoginResponse, ILoginRequest>({
    url: `auth/login`,
    data,
  });
};

export const logout = () => {
  return ApiClient.POST<void, undefined>({
    url: `auth/logout`,
    data: undefined,
  });
};

export const useAuth = () => {
  return useQuery<IAuthResponse, Error, IAuthUserData>({
    queryKey: ['auth'],
    queryFn: auth,
    retry: false,
    select: (response) => response.data,
  });
};

export const useLogin = (username: string, password: string) => {
  return useQuery<ILoginResponse, Error, IAuthUserData>({
    queryKey: ['auth', 'login'],
    queryFn: () => login({ username, password }),
    select: (response) => response.data,
  });
};
