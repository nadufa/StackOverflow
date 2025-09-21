import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';
import type { IUserDescription, IUserDescriptionResponse } from '../model';

const fetchUserDescription = (): Promise<IUserDescriptionResponse> => {
  return ApiClient.GET<IUserDescriptionResponse>({
    url: 'users/:id',
  });
};

export const useGetUserDescription = () => {
  return useQuery<IUserDescriptionResponse, Error, IUserDescription>({
    queryKey: ['users'],
    queryFn: fetchUserDescription,
    select: (response) => response.data,
  });
};
