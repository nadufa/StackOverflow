import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';
import type { IPost, IPostResponse } from '../model';

const fetchPost = (snippetId: string): Promise<IPostResponse> => {
  return ApiClient.GET<IPostResponse>({
    url: `snippets/${snippetId}`,
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
