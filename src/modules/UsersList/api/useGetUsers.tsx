import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';
import type { IUsersResponse, IUsersSelect } from '../model';

const fetchUsers = (): Promise<IUsersResponse> => {
  return ApiClient.GET<IUsersResponse>({
    url: 'users?page=1&limit=20&sortBy=id%3AASC',
  });
};

export const useGetUsers = () => {
  return useQuery<IUsersResponse, Error, IUsersSelect>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    select: (response) => response.data,
  });
};
