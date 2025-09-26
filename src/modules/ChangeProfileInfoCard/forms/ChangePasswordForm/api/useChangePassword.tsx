import { useMutation } from '@tanstack/react-query';
import { ApiClient } from '../../../../../app/api';
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

export const useChangePassword = ({ reset }: { reset: () => void }) => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: reset,
  });
};
