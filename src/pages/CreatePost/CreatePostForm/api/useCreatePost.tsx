import { useQuery } from '@tanstack/react-query';
import type { IPost, IPostCreated, IPostResponse } from '../model';
import { ApiClient } from '@/app/api';

export const fetchCreatePost = (data: {
  language: string;
  code: string;
}): Promise<IPostResponse> => {
  return ApiClient.POST<IPostResponse, IPost>({
    url: `snippets`,
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
