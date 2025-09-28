import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IUserDeleteData, IUserDeleteResponse } from '../model';

export const deleteUser = (): Promise<IUserDeleteResponse> => {
  return ApiClient.DELETE<IUserDeleteResponse>({
    url: API_ENDPOINTS.USER.DELETE,
  });
};

export const useUserDelete = () => {
  return useQuery<IUserDeleteResponse, Error, IUserDeleteData>({
    queryKey: ['me'],
    queryFn: () => deleteUser(),
    select: (response) => response.data,
  });
};
