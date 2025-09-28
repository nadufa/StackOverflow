import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IUserStatistic, IUserStatisticResponse } from '../model';

const fetchUserStatistic = (userId: string): Promise<IUserStatisticResponse> => {
  return ApiClient.GET<IUserStatisticResponse>({
    url: API_ENDPOINTS.USER.STATISTIC(userId),
  });
};

export const useGetUserStatistic = (userId: string) => {
  return useQuery<IUserStatisticResponse, Error, IUserStatistic>({
    queryKey: ['statistic', userId],
    queryFn: () => fetchUserStatistic(userId),
    select: (response) => response.data,
    enabled: !!userId,
  });
};
