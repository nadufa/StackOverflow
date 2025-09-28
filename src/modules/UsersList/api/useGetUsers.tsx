import { keepPreviousData, useInfiniteQuery, type InfiniteData } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import type { IUsersResponse } from '../model';
import type { ISearchState } from '../model/types';
import { getParams, type IGetParams } from './lib/getParams';
import { axiosInstance } from '@/app/api/axiosInstance';

const PAGE_LIMIT = 20;

const fetchUsers = ({ page, ...rest }: IGetParams) => {
  return axiosInstance.get<IUsersResponse>(
    `users${getParams({ ...rest, page, limit: PAGE_LIMIT })}`
  );
};

export const selectUsers = (
  response: InfiniteData<AxiosResponse<IUsersResponse, unknown>, number>
) => {
  return response.pages.flatMap(({ data }) => data);
};

export const useGetUsers = ({ ...rest }: ISearchState) => {
  return useInfiniteQuery({
    queryKey: ['userslist', ...Object.values(rest)],
    queryFn: ({ pageParam: page }) => fetchUsers({ page, ...rest }),
    select: selectUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.data.data.data.length < PAGE_LIMIT) {
        return null;
      }
      return lastPageParam + 1;
    },
    refetchOnWindowFocus: false,
    retry: 0,
    placeholderData: keepPreviousData,
  });
};
