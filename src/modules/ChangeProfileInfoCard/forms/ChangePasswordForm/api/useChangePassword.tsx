import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useNotification } from '@/app/providers';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const changePassword = (data: { oldPassword: string; newPassword: string }) => {
  return ApiClient.PATCH({
    url: API_ENDPOINTS.USER.PASSWORD,
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
