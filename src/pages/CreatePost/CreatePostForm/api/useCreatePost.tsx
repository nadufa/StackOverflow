import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IPost, IPostCreated, IPostResponse } from '../model';

export const fetchCreatePost = (data: {
  language: string;
  code: string;
}): Promise<IPostResponse> => {
  return ApiClient.POST<IPostResponse, IPost>({
    url: API_ENDPOINTS.SNIPPETS.BASE,
    data,
  });
};

export const useCreatePost = (language: string, code: string) => {
  return useQuery<IPostResponse, Error, IPostCreated>({
    queryKey: ['snippets'],
    queryFn: () => fetchCreatePost({ language, code }),
    select: (response) => response.data,
  });
};
