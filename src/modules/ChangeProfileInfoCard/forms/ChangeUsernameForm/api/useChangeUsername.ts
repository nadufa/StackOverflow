import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ApiClient } from '../../../../../app/api';
import type { IUserUsernameRequest, IUserUsernameResponse } from '../model';

export const changeUsername = (username: string): Promise<IUserUsernameResponse> => {
  return ApiClient.PATCH<IUserUsernameResponse, IUserUsernameRequest>({
    url: `me`,
    data: { username },
  });
};

export const useChangeUsername = ({
  reset,
  authUserId,
}: {
  reset: () => void;
  authUserId: string;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changeUsername,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['statistic', authUserId] });
      reset();
    },
  });
};
