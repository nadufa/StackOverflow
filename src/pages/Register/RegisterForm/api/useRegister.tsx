import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { ApiClient } from '@/app/api';
import { useNotification } from '@/app/providers';
import { RoutePath } from '@/app/routing';
import type { IRegisterRequest, IRegisterResponse } from '../model';

export const register = (data: {
  username: string;
  password: string;
}): Promise<IRegisterResponse> => {
  return ApiClient.POST<IRegisterResponse, IRegisterRequest>({
    url: `register`,
    data,
  });
};

export const useRegister = ({
  reset,
  onError,
}: {
  reset: () => void;
  onError?: (errorMessage: string) => void;
}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { success } = useNotification();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ['register'] });
      success('Registration completed successfully!');
      navigate(RoutePath.LOGIN);
    },
    onError: (err: AxiosError<any>) => {
      const errorMessage =
        err.response?.data?.errors?.[0]?.failures?.[0] ||
        err.response?.data?.message ||
        'Failed to register';
      if (onError) {
        onError(errorMessage);
      }
    },
  });
};
