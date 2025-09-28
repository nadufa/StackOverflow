import { ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IDeleteQuestionResponse, IQuestion } from '../model';

export const deleteQuestion = (questionId: number): Promise<IDeleteQuestionResponse> => {
  return ApiClient.DELETE<IDeleteQuestionResponse>({
    url: `questions/${questionId}`,
  });
};

export const useDeleteQuestion = (questionId: number) => {
  return useQuery<IDeleteQuestionResponse, Error, IQuestion>({
    queryKey: ['questions', questionId],
    queryFn: () => deleteQuestion(questionId),
    select: (response) => response.data,
    enabled: !!questionId,
  });
};
