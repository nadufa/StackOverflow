import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';

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
