import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { ApiClient } from '@/app/api';
import { useNotification } from '@/app/providers';

export const changeUsername = (username: string) => {
  return ApiClient.PATCH({
    url: `me`,
    data: { username },
  });
};

export const useChangeUsername = ({
  reset,
  authUserId,
  onError,
}: {
  reset: () => void;
  authUserId: string;
  onError?: (errorMessage: string) => void;
}) => {
  const queryClient = useQueryClient();
  const { success } = useNotification();

  return useMutation({
    mutationFn: changeUsername,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['statistic', authUserId] });
      reset();
      success('Username changed successfully!');
    },
    onError: (err: AxiosError<any>) => {
      const errorMessage =
        err.response?.data?.errors?.[0]?.failures?.[0] ||
        err.response?.data?.message ||
        'Failed to change username';
      if (onError) {
        onError(errorMessage);
      }
    },
  });
};
