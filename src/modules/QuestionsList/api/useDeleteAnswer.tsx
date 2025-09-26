import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';
import type { IAnswerBase, IDeleteAnswerResponse } from '../model';

export const deleteAnswer = (answerId: number): Promise<IDeleteAnswerResponse> => {
  return ApiClient.DELETE<IDeleteAnswerResponse>({
    url: `answers/${answerId}`,
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
