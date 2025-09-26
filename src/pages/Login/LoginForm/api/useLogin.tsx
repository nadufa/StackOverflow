import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

export const useLogin = ({ reset }: { reset: () => void }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] });
      reset();
      navigate(RoutePath.BASE);
    },
  });
};
