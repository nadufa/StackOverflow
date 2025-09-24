import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';
import type { ICommentRequest, ICommentResponse, ICommentResponseData } from '../model';

export const fetchCreateComment = (data: {
  content: string;
  snippetId: number;
}): Promise<ICommentResponse> => {
  return ApiClient.POST<ICommentResponse, ICommentRequest>({
    url: `comments`,
    data,
  });
};

export const useCreateComment = (content: string, snippetId: number) => {
  return useQuery<ICommentResponse, Error, ICommentResponseData>({
    queryKey: ['comments'],
    queryFn: () => fetchCreateComment({ content, snippetId }),
    select: (response) => response.data,
    enabled: !!snippetId,
  });
};
