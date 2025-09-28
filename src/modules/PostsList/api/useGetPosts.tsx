import { axiosInstance } from '@/app/api/axiosInstance';
import { keepPreviousData, useInfiniteQuery, type InfiniteData } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import type { IPostsResponse } from '../model';
import type { ISearchState } from '../model/types';
import { getParams, type IGetParams } from './lib/getParams';

const PAGE_LIMIT = 20;

const fetchPosts = ({ page, ...rest }: IGetParams) => {
  return axiosInstance.get<IPostsResponse>(
    `snippets${getParams({ ...rest, page, limit: PAGE_LIMIT })}`
  );
};

export const selectPosts = (
  response: InfiniteData<AxiosResponse<IPostsResponse, unknown>, number>
) => {
  return response.pages.flatMap(({ data }) => data);
};

export const useGetPosts = ({ ...rest }: ISearchState) => {
  return useInfiniteQuery({
    queryKey: ['snippets', ...Object.values(rest)],
    queryFn: ({ pageParam: page }) => fetchPosts({ page, ...rest }),
    select: selectPosts,
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
