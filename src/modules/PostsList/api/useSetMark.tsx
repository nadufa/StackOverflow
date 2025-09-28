import { API_ENDPOINTS, ApiClient } from '@/app/api';
import { useQuery } from '@tanstack/react-query';
import type { IMarkData, IMarkResponse, IMarkValue, MarkType } from '../model';

export const fetchSetMark = (data: {
  snippetId: string;
  mark: MarkType;
}): Promise<IMarkResponse> => {
  return ApiClient.POST<IMarkResponse, IMarkValue>({
    url: API_ENDPOINTS.SNIPPETS.MARK(data.snippetId),
    data: { mark: data.mark },
  });
};

export const useSetMark = (snippetId: string, mark: MarkType) => {
  return useQuery<IMarkResponse, Error, IMarkData>({
    queryKey: ['snippets', snippetId],
    queryFn: () => fetchSetMark({ snippetId, mark }),
    select: (response) => response.data,
  });
};
