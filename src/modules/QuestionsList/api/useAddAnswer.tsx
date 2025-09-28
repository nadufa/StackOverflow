import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IAnswerData, IAnswerRequest, IAnswerResponse } from '../model';

export const fetchAddAnswer = (data: {
  content: string;
  questionId: number;
}): Promise<IAnswerResponse> => {
  return ApiClient.POST<IAnswerResponse, IAnswerRequest>({
    url: API_ENDPOINTS.ANSWERS.BASE,
    data,
  });
};

export const useAddAnswer = (content: string, questionId: number) => {
  return useQuery<IAnswerResponse, Error, IAnswerData>({
    queryKey: ['answers'],
    queryFn: () => fetchAddAnswer({ content, questionId }),
    select: (response) => response.data,
    enabled: !!questionId,
  });
};
