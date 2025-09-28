import { ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IQuestionAnswerData } from '../model';

export const getAnswers = (questionId: number): Promise<IQuestionAnswerData> => {
  return ApiClient.GET<IQuestionAnswerData>({
    url: `answers?questionId=${questionId}`,
  });
};

export const useGetAnswers = (questionId: number) => {
  return useQuery<IQuestionAnswerData, Error>({
    queryKey: ['getAnswers', questionId],
    queryFn: () => getAnswers(questionId),
    enabled: !!questionId,
  });
};
