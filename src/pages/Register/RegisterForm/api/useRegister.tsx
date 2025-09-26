import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ApiClient } from '../../../../app/api';
import { RoutePath } from '../../../../app/routing';
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

export const useRegister = ({ reset }: { reset: () => void }) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ['register'] });
      navigate(RoutePath.LOGIN);
    },
  });
};
