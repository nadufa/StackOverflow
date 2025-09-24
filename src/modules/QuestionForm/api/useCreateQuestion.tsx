import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';
import type { IQuestionData, IQuestionRequest, IQuestionResponse } from '../model';

export const fetchCreateQuestion = (data: {
  title: string;
  description: string;
  attachedCode: string;
}): Promise<IQuestionResponse> => {
  return ApiClient.POST<IQuestionResponse, IQuestionRequest>({
    url: `questions`,
    data,
  });
};

export const useCreateQuestion = (title: string, description: string, attachedCode: string) => {
  return useQuery<IQuestionResponse, Error, IQuestionData>({
    queryKey: ['questions'],
    queryFn: () => fetchCreateQuestion({ title, description, attachedCode }),
    select: (response) => response.data,
  });
};
