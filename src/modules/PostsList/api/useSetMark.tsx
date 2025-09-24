import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../app/api';
import type { IMarkData, IMarkResponse, IMarkValue, MarkType } from '../model';

export const fetchSetMark = (data: {
  snippetId: string;
  mark: MarkType;
}): Promise<IMarkResponse> => {
  return ApiClient.POST<IMarkResponse, IMarkValue>({
    url: `snippets/${data.snippetId}/mark`,
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
