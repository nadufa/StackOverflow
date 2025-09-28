import { ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';

export const logout = () => {
  return ApiClient.POST<void, undefined>({
    url: `auth/logout`,
    data: undefined,
  });
};

export const useLogout = () => {
  return useQuery<void, Error, void>({
    queryKey: ['auth', 'logout'],
    queryFn: () => logout(),
  });
};
