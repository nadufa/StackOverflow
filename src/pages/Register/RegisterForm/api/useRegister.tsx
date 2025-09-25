import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../../app/api';
import type { IRegisterData, IRegisterRequest, IRegisterResponse } from '../model';

export const register = (data: {
  username: string;
  password: string;
}): Promise<IRegisterResponse> => {
  return ApiClient.POST<IRegisterResponse, IRegisterRequest>({
    url: `register`,
    data,
  });
};

export const useRegister = (username: string, password: string) => {
  return useQuery<IRegisterResponse, Error, IRegisterData>({
    queryKey: ['register'],
    queryFn: () => register({ username, password }),
    select: (response) => response.data,
  });
};
