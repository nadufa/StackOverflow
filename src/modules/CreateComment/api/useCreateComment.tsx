import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { ICommentRequest, ICommentResponse, ICommentResponseData } from '../model';

export const fetchCreateComment = (data: {
  content: string;
  snippetId: number;
}): Promise<ICommentResponse> => {
  return ApiClient.POST<ICommentResponse, ICommentRequest>({
    url: API_ENDPOINTS.COMMENTS.BASE,
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
