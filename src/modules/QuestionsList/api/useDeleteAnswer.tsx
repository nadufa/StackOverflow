import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IAnswerBase, IDeleteAnswerResponse } from '../model';

export const deleteAnswer = (answerId: number): Promise<IDeleteAnswerResponse> => {
  return ApiClient.DELETE<IDeleteAnswerResponse>({
    url: API_ENDPOINTS.ANSWERS.SINGLE(answerId),
  });
};

export const useDeleteAnswer = (answerId: number) => {
  return useQuery<IDeleteAnswerResponse, Error, IAnswerBase>({
    queryKey: ['answers', answerId],
    queryFn: () => deleteAnswer(answerId),
    select: (response) => response.data,
    enabled: !!answerId,
  });
};
