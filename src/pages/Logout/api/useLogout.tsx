import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';

export const logout = () => {
  return ApiClient.POST<void, undefined>({
    url: API_ENDPOINTS.AUTH.LOGOUT,
    data: undefined,
  });
};

export const useLogout = () => {
  return useQuery<void, Error, void>({
    queryKey: ['auth', 'logout'],
    queryFn: () => logout(),
  });
};
