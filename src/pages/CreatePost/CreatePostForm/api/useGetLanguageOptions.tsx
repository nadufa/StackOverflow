import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../../../../app/api';
import type { ILanguageOptionsData, ILanguageOptionsResponse } from '../model';

const fetchLanguageOptions = (): Promise<ILanguageOptionsResponse> => {
  return ApiClient.GET<ILanguageOptionsResponse>({
    url: `snippets/languages`,
  });
};

export const useGetLanguageOptions = () => {
  return useQuery<ILanguageOptionsResponse, Error, ILanguageOptionsData>({
    queryKey: ['snippets'],
    queryFn: () => fetchLanguageOptions(),
    select: (response) => response.data,
  });
};
