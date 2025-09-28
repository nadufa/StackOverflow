import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ApiClient } from '../../../../app/api';
import { RoutePath } from '../../../../app/routing';
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

export const useAuth = () => {
  return useQuery<IAuthResponse, Error, IAuthUserData>({
    queryKey: ['auth'],
    queryFn: auth,
    retry: false,
    select: (response) => response.data,
  });
};

export const useLogin = ({
  reset,
  onError,
}: {
  reset: () => void;
  onError?: (errorMessage: string) => void;
}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] });
      reset();
      navigate(RoutePath.BASE);
    },
    onError: (err: AxiosError<any>) => {
      const errorMessage =
        err.response?.data?.errors?.[0]?.failures?.[0] ||
        err.response?.data?.message ||
        'Failed to login';
      if (onError) {
        onError(errorMessage);
      }
    },
  });
};
