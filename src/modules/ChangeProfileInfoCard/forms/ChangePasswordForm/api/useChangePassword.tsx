import { ApiClient } from '@/app/api';
import { useNotification } from '@/app/providers';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { IUserPasswordRequest, IUserPasswordResponse } from '../model';

export const changePassword = (data: {
  oldPassword: string;
  newPassword: string;
}): Promise<IUserPasswordResponse> => {
  return ApiClient.PATCH<IUserPasswordResponse, IUserPasswordRequest>({
    url: `me/password`,
    data,
  });
};

export const useChangePassword = ({
  reset,
  onError,
}: {
  reset: () => void;
  onError?: (errorMessage: string) => void;
}) => {
  const { success } = useNotification();

  return useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      reset();
      success('Password changed successfully!');
    },
    onError: (err: AxiosError<any>) => {
      const errorMessage =
        err.response?.data?.errors?.[0]?.failures?.[0] ||
        err.response?.data?.message ||
        'Failed to change password';
      if (onError) {
        onError(errorMessage);
      }
    },
  });
};
