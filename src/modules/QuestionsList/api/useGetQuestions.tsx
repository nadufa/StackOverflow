import { keepPreviousData, useInfiniteQuery, type InfiniteData } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import type { IQuestionsResponse } from '../model';
import type { ISearchState } from '../model/types';
import { getParams, type IGetParams } from './lib/getParams';
import { axiosInstance } from '@/app/api/axiosInstance';

const PAGE_LIMIT = 20;

const fetchQuestions = ({ page, ...rest }: IGetParams) => {
  return axiosInstance.get<IQuestionsResponse>(
    `questions${getParams({ ...rest, page, limit: PAGE_LIMIT })}`
  );
};

export const selectQuestions = (
  response: InfiniteData<AxiosResponse<IQuestionsResponse, unknown>, number>
) => {
  return response.pages.flatMap(({ data }) => data);
};

export const useGetQuestions = ({ ...rest }: ISearchState) => {
  return useInfiniteQuery({
    queryKey: ['questionslist', ...Object.values(rest)],
    queryFn: ({ pageParam: page }) => fetchQuestions({ page, ...rest }),
    select: selectQuestions,
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
