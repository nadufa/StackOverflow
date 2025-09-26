import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';
import type { IUserDeleteData, IUserDeleteResponse } from '../model';

export const deleteUser = (): Promise<IUserDeleteResponse> => {
  return ApiClient.DELETE<IUserDeleteResponse>({
    url: `me`,
  });
};

export const useUserDelete = () => {
  return useQuery<IUserDeleteResponse, Error, IUserDeleteData>({
    queryKey: ['me'],
    queryFn: () => deleteUser(),
    select: (response) => response.data,
  });
};
