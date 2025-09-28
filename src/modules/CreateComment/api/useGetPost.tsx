import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IPost, IPostResponse } from '../model';

const fetchPost = (snippetId: string): Promise<IPostResponse> => {
  return ApiClient.GET<IPostResponse>({
    url: API_ENDPOINTS.SNIPPETS.SINGLE(snippetId),
  });
};

export const useGetPost = (snippetId: string) => {
  return useQuery<IPostResponse, Error, IPost>({
    queryKey: ['snippets', snippetId],
    queryFn: () => fetchPost(snippetId),
    select: (response) => response.data,
    enabled: !!snippetId,
  });
};
